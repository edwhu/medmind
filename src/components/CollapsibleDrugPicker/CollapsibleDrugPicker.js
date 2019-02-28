import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  PickerIOS,
  Text
} from "react-native";
import Collapsible from "react-native-collapsible";
import PropTypes from "prop-types";
import { drugTypes } from "../../constants/constants";
import { medmindBlue } from "../../constants/styles";

export default class CollapsibleDatePicker extends Component {
  static propTypes = {
    setDrugType: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { collapsed: true, chosenDrugType: drugTypes[0] };
  }

  pickerOnPress = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setDrugType = drugType => {
    this.setState({ chosenDrugType: drugType });
    this.props.setDrugType(drugType);
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pickerOnPress} style={styles.form}>
          <View style={styles.container}>
            <Text>Drug Type</Text>
            <Text>{`${this.state.chosenDrugType}`}</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed}>
          <View>
            <PickerIOS
              selectedValue={this.state.chosenDrugType}
              onValueChange={this.setDrugType}
            >
              {drugTypes.map((t, i) => (
                <PickerIOS.Item key={t + i.toString()} value={t} label={t} />
              ))}
            </PickerIOS>
          </View>
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  }
});
