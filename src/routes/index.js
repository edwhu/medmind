import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/Login/Login";
import TimelineScreen from "../screens/Timeline/Timeline";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import TermsAndConditionsScreen from "../screens/TermsConditions/TermsConditions";
import ShareDrugScreen from "../screens/ShareDrugScreen/ShareDrugScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicy/PrivacyPolicy";
import ReminderScreen from "../screens/ReminderScreen/ReminderScreen";
import DayViewScreen from "../screens/DayViewScreen/DayViewScreen";
import GlobalDrugListScreen from "../screens/GlobalDrugListScreen/GlobalDrugListScreen";
import CameraScreen from "../screens/Camera/Camera";
import AddDrugScreen from "../screens/AddDrug/AddDrug";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPassword";
import CreateAccountScreen from "../screens/CreateAccountScreen/CreateAccountScreen";

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

const CreateAccountStack = createStackNavigator(
  {
    signUpScreen: {
      screen: CreateAccountScreen
    },
  },
  {
    initialRouteName: "signUpScreen",
    mode: "modal",
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
    cardStyle: {
      shadowColor: "transparent"
    }
  }
);

const LoginStack = createStackNavigator(
  {
    loginScreen: {
      screen: LoginScreen
    },
    forgotPasswordScreen: {
      screen: ForgotPasswordScreen
    },
    createAccountScreen: {
      screen: CreateAccountStack
    }
  },
  {
    initialRouteName: "loginScreen",
    // initialRouteName: "forgotPasswordScreen",
    // initialRouteName: "createAccountScreen",
    mode: "modal",
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
    cardStyle: {
      shadowColor: "transparent"
    }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    loginStack: {
      screen: LoginStack
    },
    drawerStack: {
      screen: DrawerStack
    }
  },
  {
    headerMode: "none",
    initialRouteName: "loginStack"
  }
);

export default AppStackNavigator;
