import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { medmindBlue } from '../constants/styles';
import LoginScreen from '../screens/Login/Login';
import TimelineScreen from '../screens/Timeline/Timeline';
import CameraScreen from '../screens/Camera/Camera';
import AddDrugScreen from '../screens/AddDrug/AddDrug';

const DrawerNavigation = createDrawerNavigator(
  {
    timelineScreen: {
      screen: TimelineScreen
    },
    cameraScreen: {
      screen: CameraScreen
    },
    addDrugScreen: {
      screen: AddDrugScreen
    },
    logout: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'addDrugScreen',
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
      // headerStyle: { backgroundColor: medmindBlue }, // styles the header bar
      // title: 'Medmind',
      // headerTintColor: 'white', // styles the title color
    }),
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);



const AppStackNavigator = createStackNavigator(
  {
    loginStack: {
      screen: LoginScreen
    },
    drawerStack: {
      screen: DrawerStack
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'drawerStack',
  }
);

export default AppStackNavigator;
