import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera, Permissions } from 'expo';
import { getFDA } from '../../utilities/FDA';
import drugData from '../../assets/Products.json';

const GOOGLE_API_KEY = 'AIzaSyDlnentevJhpv1-abNDgnx3JZGu-CFZzlo';
const GOOGLE_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API_KEY}`;

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.drugSet = new Set(drugData);
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePicture() {
    if (!this.camera) {
      return;
    }
    console.warn('takePicture');
    const photo = await this.camera.takePictureAsync({ quality: 0, base64: true });
    console.warn('base64 Photo taken');
    // // Google OCR request
    const body = JSON.stringify({
      requests: [
        {
          image: {
            content: photo.base64
          },
          features: [{type: 'TEXT_DETECTION'}]
        }
      ]
    });
    console.warn('base64 body created, sending to google');
    try {
      const res = await fetch(GOOGLE_API_URL, {method: 'POST', body});
      console.warn('response gotten!');
      const json = await res.json();
      // console.warn(JSON.stringify(json));
      const responses = json.responses;
      for(let rI = 0; rI < responses.length; rI++) {
        let response = responses[rI];
        const textAnnotations = response.textAnnotations;
        if(textAnnotations == undefined) {
          break;
        }
        for(let i = 0; i < textAnnotations.length; i++) {
          const txt = textAnnotations[i];
          const desc = txt.description.toUpperCase();
          if(this.drugSet.has(desc)) {
            Alert.alert(`Found a drug name`, desc);
            const fdaDrug = await getFDA(desc);
            console.log('fda drug', fdaDrug);
            if(fdaDrug.error) {
              throw new Error(fdaDrug.error.message);
            }
            const results = fdaDrug.results;
            if(results.length == 0) {
              throw new Error('no FDA results');
            }
            const firstDrug = results[0];
            console.warn('Drug Found: ' + firstDrug.openfda.brand_name[0]);
            // navigateToDrugFormScreen(this.props, desc, firstDrug);
            return;
          }
        }
      }
    } catch(err) {
      console.error(err)
    }

  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.takePicture}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}