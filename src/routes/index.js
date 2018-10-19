import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/Login';
import TimelineScreen from '../screens/Timeline/Timeline';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import TermsAndConditionsScreen from '../screens/TermsConditions/TermsConditions';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy/PrivacyPolicy';
import { medmindBlue } from '../constants/styles';
import DayViewScreen from '../screens/DayViewScreen/DayViewScreen';
import GlobalDrugListScreen from "../screens/GlobalDrugListScreen/GlobalDrugListScreen";


const DrawerNavigation = createDrawerNavigator(
  {
    timelineScreen: {
      screen: TimelineScreen
    },
    logout: {
      screen: LoginScreen
    },
    termsAndConditionsScreen: {
      screen: TermsAndConditionsScreen
    },
    privacyPolicyScreen: {
      screen: PrivacyPolicyScreen
    },
    dayViewScreen: {
      screen: DayViewScreen,
    },
    globalDrugListScreen: {
      screen: GlobalDrugListScreen
    },
  },
  {
    initialRouteName: 'timelineScreen',
    contentComponent: CustomDrawer
  }
);

const DrawerStack = createStackNavigator(
  {
    DrawerNavigation: { screen: DrawerNavigation }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      header: null
      // headerStyle: { backgroundColor: medmindBlue }, // styles the header bar
      // title: 'Medmind',
      // headerTintColor: 'white', // styles the title color
    }),
    cardStyle: {
      shadowColor: "transparent"
    }
  }
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
    headerMode: "none",
    // initialRouteName: 'loginStack',
    initialRouteName: "drawerStack"
  }
);

export default AppStackNavigator;
