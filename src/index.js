import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './routes';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
