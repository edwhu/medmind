import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/Login';

const DrawerNavigation = createDrawerNavigator(
  {
    firstScreen: {
      screen: LoginScreen
    },
    secondScreen: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'firstScreen',
    // contentComponent: DrawerComponent
  }
)

const DrawerStack = createStackNavigator(
  {
    DrawerNavigation: { screen: DrawerNavigation }
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  }
);



const AppStackNavigator = createStackNavigator(
  {
    someStack: {
      screen: LoginScreen
    },
    drawerStack: {
      screen: DrawerStack
    }
  },
  {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'someStack',
  }
);

export default AppStackNavigator;