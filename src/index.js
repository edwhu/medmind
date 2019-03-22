import React from 'react';
import { Alert, StatusBar, View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './routes';
import store from './redux/store';
YellowBox.ignoreWarnings(['Remote debugger']); // ignore image loader warning
import { Notifications, Permissions } from 'expo';

export default class App extends React.Component {
  handleNotification = ({ data }) => {
    Alert.alert(JSON.stringify(data.notificationTitle, null, 2), JSON.stringify(data.body, null, 2));
  };

  async componentDidMount() {
    // We need to ask for Notification permissions for ios devices
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }

    Notifications.addListener(this.handleNotification);
    // this._notificationSubscription = Notifications.addListener(this.handleNotification)

    // let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    // if (Constants.isDevice && result.status === 'granted') {
    //     console.log('Notification permissions granted.')
    // }
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
