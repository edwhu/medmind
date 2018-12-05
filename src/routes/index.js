import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Dimensions } from "react-native";
import LoginScreen from "../screens/Login/Login";
import TimelineScreen from "../screens/Timeline/Timeline";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import TermsAndConditionsScreen from "../screens/TermsConditions/TermsConditions";
import PrivacyPolicyScreen from "../screens/PrivacyPolicy/PrivacyPolicy";
import ReminderScreen from "../screens/ReminderScreen/ReminderScreen";
import DayViewScreen from "../screens/DayViewScreen/DayViewScreen";
import GlobalDrugListScreen from "../screens/GlobalDrugListScreen/GlobalDrugListScreen";
import CameraScreen from "../screens/Camera/Camera";
import AddDrugScreen from "../screens/AddDrug/AddDrug";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import ShareDrugScreen from "../screens/ShareDrugScreen/ShareDrugScreen";

const { width, height } = Dimensions.get('screen');

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
    },
    termsAndConditionsScreen: {
      screen: TermsAndConditionsScreen
    },
    privacyPolicyScreen: {
      screen: PrivacyPolicyScreen
    },
    shareDrugScreen: {
      screen: ShareDrugScreen
    },
    privacyPolicyScreen: {
      screen: PrivacyPolicyScreen
    },
    reminderScreen: {
      screen: ReminderScreen
    },
    dayViewScreen: {
      screen: DayViewScreen
    },
    dayViewScreen: {
      screen: DayViewScreen
    },
    globalDrugListScreen: {
      screen: GlobalDrugListScreen
    },
    notificationScreen: {
      screen: NotificationScreen
    }
  },
  {
    initialRouteName: "timelineScreen",
    contentComponent: CustomDrawer,
    drawerWidth: Math.min(height, width) * 0.88,
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 14,
        marginLeft: '5.3%'
      },
    }
  },
 
);

const DrawerStack = createStackNavigator(
  {
    DrawerNavigation: { screen: DrawerNavigation }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      header: null,
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
    initialRouteName: "drawerStack"
  }
);

export default AppStackNavigator;
