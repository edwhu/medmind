import React from "react";
import { Text, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Camera, Permissions } from "expo";
import { getFDA } from "../../utilities/FDA";
import { Ionicons } from "@expo/vector-icons";
import drugData from "../../assets/Products-3.json";

const GOOGLE_API_KEY = "AIzaSyDlnentevJhpv1-abNDgnx3JZGu-CFZzlo";
const GOOGLE_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API_KEY}`;

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Camera Screen"
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front
  };

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.drugSet = new Set(drugData);

  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  async mockTakePicture() {
    const mockData = ["Tylen0l", "Tylenol"];
    const stringSimilarity = require('string-similarity');
    for(let i = 0; i < mockData.length; i++) {
      if(mockData[i].length <= 5) 
        let j = 0;
      else if(mockData[i].length <= 10) 
        let j = 1;
      else if(mockData[i].length <= 15) 
        let j = 2;
      else if(mockData[i].length <= 20) 
        let j = 3;
      else if(mockData[i].length <= 25) 
        let j = 4;
      else 
        let j = 5;
      const bestMatch = stringSimilarity.findBestMatch(mockData[i].toUpperCase(), drugSet[j]).bestMatch;
      console.log('Found a matching drug: ', bestMatch.target);
    }
  }

  async takePicture() {
    if (!this.camera) {
      return;
    }
    console.warn("takePicture");
    const photo = await this.camera.takePictureAsync({
      quality: 0,
      base64: true
    });
    console.warn("base64 Photo taken");
    // // Google OCR request
    const body = JSON.stringify({
      requests: [
        {
          image: {
            content: photo.base64
          },
          features: [{ type: "TEXT_DETECTION" }]
        }
      ]
    });
    console.warn("base64 body created, sending to google");
    try {
      const res = await fetch(GOOGLE_API_URL, { method: "POST", body });
      console.warn("response gotten!");
      const json = await res.json();
      // console.warn(JSON.stringify(json));
      const responses = json.responses;
      for (let rI = 0; rI < responses.length; rI++) {
        let response = responses[rI];
        const textAnnotations = response.textAnnotations;
        if (textAnnotations == undefined) {
          break;
        }
        for (let i = 0; i < textAnnotations.length; i++) {
          const txt = textAnnotations[i];
          const desc = txt.description.toUpperCase();
          if (this.drugSet.has(desc)) {
            Alert.alert(`Found a drug name`, desc);
            const fdaDrug = await getFDA(desc);
            console.log("fda drug", fdaDrug);
            if (fdaDrug.error) {
              throw new Error(fdaDrug.error.message);
            }
            const results = fdaDrug.results;
            if (results.length == 0) {
              throw new Error("no FDA results");
            }
            const firstDrug = results[0];
            console.warn("Drug Found: " + firstDrug.openfda.brand_name[0]);
            // navigateToDrugFormScreen(this.props, desc, firstDrug);
            return;
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  // async determineDrug(item) {
  //   const stringSimilarity = require('string-similarity');
  //   for(let i = 0; i < item.length; i++) {
  //     const bestMatch = stringSimilarity.findBestMatch(item[i], drugSet).bestMatch;
  //     Alert.alert('Found a matching drug: ', bestMatch.target);
  //   }
  //   //iterate over every string in array, using string similarity use find best match for drugSet, might be slow
  // }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.flex}>
          <Camera
            style={styles.flex}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={styles.cameraCircle}
                onPress={this.mockTakePicture}
              >
                <View style={styles.cameraIcon}>
                  <Ionicons name="ios-camera" size={50} />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cameraCircle: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  cameraIcon: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  }
});
