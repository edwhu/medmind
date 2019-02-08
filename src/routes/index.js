import { createDrawerNavigator, createStackNavigator, NavigationActions } from "react-navigation";
import { Dimensions, Image, StyleSheet} from "react-native";
import LoginScreen from "../screens/Login/Login";
import TimelineScreen from "../screens/Timeline/Timeline";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import TermsAndConditionsScreen from "../screens/TermsConditions/TermsConditions";
import PrivacyPolicyScreen from "../screens/PrivacyPolicy/PrivacyPolicy";
import ReminderScreen from "../screens/ReminderScreen/ReminderScreen";
import DayViewScreen from "../screens/DayViewScreen/DayViewScreen";
import GlobalDrugListScreen from "../screens/GlobalDrugListScreen/GlobalDrugListScreen";
import ReminderFormScreen from "../screens/ReminderForm/ReminderForm";
import RepeatScreen from "../screens/RepeatScreen/RepeatScreen";
import SoundScreen from "../screens/SoundScreen/SoundScreen";
import ChooseDrugScreen from "../screens/ChooseDrugScreen/ChooseDrugScreen";
import CameraScreen from "../screens/Camera/Camera";
import AddDrugScreen from "../screens/AddDrug/AddDrug";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import ShareDrugScreen from "../screens/ShareDrugScreen/ShareDrugScreen";
import { medmindBlue } from "../constants/styles";
import ScreenHeader from "../components/ScreenHeader/ScreenHeader";
import HamburgerIcon from "../components/HamburgerIcon/HamburgerIcon";
import SettingsButton from "../components/SettingsButton/SettingsButton";
import React, { Component } from "react";
import WeekIcon from "../assets/01-Week.png";
import DayIcon from "../assets/00-Day.png";
import SettingsIcon from "../assets/07-Settings.png";
import ExportIcon from "../assets/05-ExportSumm.png";
import DrugIcon from "../assets/04-DrugList.png";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create(
  {
    imageStyle: {
      width: 20,
      height: 20,
      borderRadius: 5,
      marginLeft: "15.2%"
    },
  }
)
const ReminderStack = createStackNavigator(
  {
    reminderScreen: {
      screen: ReminderScreen
    },
    reminderFormScreen: {
      screen: ReminderFormScreen
    },
    repeatScreen: {
      screen: RepeatScreen
    },
    soundScreen: {
      screen: SoundScreen
    },
    chooseDrugScreen: {
      screen: ChooseDrugScreen
    }
  },
  {
    initialRouteName: "reminderScreen"
  }
);

openSettings = () => {
};

const withHeader = (screen, routeName) => 
  createStackNavigator(
    { [routeName]: { screen } },
    {
      headerMode: 'screen',
      navigationOptions: ({navigation}) => ({
        headerTitle: "Medmind",
        headerStyle: {
          backgroundColor: medmindBlue,
        },
        headerTitleStyle: {
          color: "white",
          fontWeight: "500",
          fontFamily: "System",
          fontSize: 24,
          flex: 1,
          textAlign: "center",
        },
        headerLeft: <HamburgerIcon onPress={()=>{
          navigation.dangerouslyGetParent().toggleDrawer()
        }}/>,
        headerRight: <SettingsButton onPress={()=>{
          openSettings()
        }}/>
      })
    },
  );

  
  
const doNotAppearOnDrawer = {
  navigationOptions: {
    drawerLabel: () => null,
    drawerIcon: () => null,
    drawerLockMode: 'locked-closed',
  }
};

const DrawerNavigation = createDrawerNavigator(
  {
    timelineScreen: {
      screen: withHeader(TimelineScreen,"timelineScreen"),
      navigationOptions: {
        drawerLabel: "Timeline",
        drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />,
      }
    },
    logout: {
      screen: LoginScreen,
    },
    termsAndConditionsScreen: {
      screen: withHeader(TermsAndConditionsScreen,"termsAndConditionsScreen"),
      navigationOptions: {
        drawerLabel: "Terms and Conditions",
        drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
      }
    },
    privacyPolicyScreen: {
      screen: withHeader(PrivacyPolicyScreen,"privacyPolicyScreen"),
      navigationOptions: {
        drawerLabel: "Privacy Policy",
        drawerIcon: () => <Image source={SettingsIcon} style={styles.imageStyle} />
      },
    },
    shareDrugScreen: {
      screen: withHeader(ShareDrugScreen,"shareDrugScreen"),
      navigationOptions: {
        drawerLabel: "shareDrugScreen",
        drawerIcon: () => <Image source={ExportIcon} style={styles.imageStyle} />
      }
    },
    reminderStack: {
      screen: ReminderStack
    },
    dayViewScreen: {
      screen: withHeader(DayViewScreen, "dayViewScreen"),
      navigationOptions: {
        drawerLabel: "Day View",
        drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
      }
    },
    globalDrugListScreen: {
      screen: withHeader(GlobalDrugListScreen,"globalDrugListScreen"),
      navigationOptions: {
        drawerLabel: "Drug List",
        drawerIcon: () => <Image source={DrugIcon} style={styles.imageStyle} />
      }
    },
    notificationScreen: {
      screen: NotificationScreen
    },
    addDrugScreen: {
      screen: withHeader(AddDrugScreen, "addDrugScreen"),
      ...doNotAppearOnDrawer,
    },
    cameraScreen: {
      screen: withHeader(CameraScreen, "camerScreen"),
      ...doNotAppearOnDrawer,
    },
  },
  {
    initialRouteName: "timelineScreen",
    contentComponent: CustomDrawer,
    drawerWidth: Math.min(height, width) * 0.88,
    contentOptions: {
      labelStyle: {
        color: "white",
        fontSize: 14,
        marginLeft: "5.3%"
      }
    },
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
      screen: DrawerNavigation
    },
    addDrugScreen: {
      screen: AddDrugScreen
    },
    cameraScreen: {
      screen: CameraScreen
    },
  },
  {
    headerMode: "null", //to turn off
    initialRouteName: "drawerStack",
   
  }
);

export default DrawerNavigation;
