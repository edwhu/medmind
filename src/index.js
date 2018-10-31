import React from "react";
import { StatusBar, View, YellowBox } from "react-native";
import { Provider } from "react-redux";

import AppNavigator from "./routes";
import store from "./redux/store";
YellowBox.ignoreWarnings(["Remote debugger"]); // ignore image loader warning
import {Constants, Notifications, Permissions} from "expo";
import { fireNotification } from "./utils"

export default class App extends React.Component {

  handleNotification() {
        console.warn('Got Notification!');
  }

  async componentDidMount() {
        // We need to ask for Notification permissions for ios devices
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (Constants.isDevice && result.status === 'granted') {
            console.log('Notification permissions granted.')
        }

        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and 
        // handle them in a callback
        Notifications.addListener(this.handleNotification);
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
