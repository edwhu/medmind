/* eslint-disable react/display-name */
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Dimensions, Image, StyleSheet } from 'react-native';
import LoginScreen from '../screens/Login/Login';
import TimelineScreen from '../screens/Timeline/Timeline';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import TermsAndConditionsScreen from '../screens/TermsConditions/TermsConditions';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy/PrivacyPolicy';
import ReminderScreen from '../screens/ReminderScreen/ReminderScreen';
import DayViewScreen from '../screens/DayViewScreen/DayViewScreen';
import GlobalDrugListScreen from '../screens/GlobalDrugListScreen/GlobalDrugListScreen';
import ReminderFormScreen from '../screens/ReminderForm/ReminderForm';
import CustomIntervalScreen from '../screens/CustomIntervalScreen/CustomInterval';
import RepeatScreen from '../screens/RepeatScreen/RepeatScreen';
import SoundScreen from '../screens/SoundScreen/SoundScreen';
import ChooseDrugScreen from '../screens/ChooseDrugScreen/ChooseDrugScreen';
import CameraScreen from '../screens/Camera/Camera';
import AddDrugScreen from '../screens/AddDrug/AddDrug';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import ShareDrugScreen from '../screens/ShareDrugScreen/ShareDrugScreen';
import EditDrugScreen from '../screens/EditDrug/EditDrug.js';
import { medmindBlue } from '../constants/styles';
import DrawerIcon from '../components/DrawerIcon/DrawerIcon';
import SettingsButton from '../components/SettingsButton/SettingsButton';
import React from 'react';
import WeekIcon from '../assets/01-Week.png';
import DayIcon from '../assets/00-Day.png';
import SettingsIcon from '../assets/07-Settings.png';
import ExportIcon from '../assets/05-ExportSumm.png';
import DrugIcon from '../assets/04-DrugList.png';
import NotifIcon from '../assets/03-Notifs.png';
import GlobalDrugListHeaderRight from '../screens/GlobalDrugListScreen/HeaderRight';
import HeaderEditButton from '../components/HeaderEditButton/HeaderEditButton';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create(
  {
    imageStyle: {
      width: 20,
      height: 20,
      borderRadius: 5,
      marginLeft: '15.2%'
    },
  }
);
const ReminderStack = createStackNavigator(
  {
    reminderScreen: {
      screen: ReminderScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: <DrawerIcon onPress={()=>{
          navigation.dangerouslyGetParent().toggleDrawer();
        }}/>,
      })
    },
    reminderFormScreen: {
      screen: ReminderFormScreen
    },
    repeatScreen: {
      screen: RepeatScreen
    },
    customIntervalScreen: {
      screen: CustomIntervalScreen
    },
    soundScreen: {
      screen: SoundScreen
    },
    chooseDrugScreen: {
      screen: ChooseDrugScreen
    }
  },
  {
    initialRouteName: 'reminderScreen',
    defaultNavigationOptions: ({navigation}) => ({
      headerTitle: 'MedMind',
      headerStyle: {
        backgroundColor: medmindBlue,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontWeight: '500',
        fontFamily: 'System',
        fontSize: 24,
        flex: 1,
        textAlign: 'center',
      },
      headerRight: (
        <HeaderEditButton Press={navigation.getParam('onEditPress')}/>
      ),
    }) 
  }
);

const openSettings = () => {};

const withHeader = (screen, routeName, overrides = {}) => 
  createStackNavigator(
    { [routeName]: { screen } },
    {
      headerMode: 'screen',
      defaultNavigationOptions: ({navigation}) => ({
        headerTitle: 'MedMind',
        headerStyle: {
          backgroundColor: medmindBlue,
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '500',
          fontFamily: 'System',
          fontSize: 24,
          flex: 1,
          textAlign: 'center',
        },
        headerLeft: <DrawerIcon onPress={()=>{
          navigation.dangerouslyGetParent().toggleDrawer();
        }}/>,
        headerRight: <SettingsButton onPress={()=>{
          openSettings();
        }}/>,
        ...overrides,
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
    dayViewScreen: {
      screen: withHeader(DayViewScreen, 'dayViewScreen'),
      navigationOptions: {
        drawerLabel: 'Day',
        drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
      }
    },
    timelineScreen: {
      screen: withHeader(TimelineScreen,'timelineScreen'),
      navigationOptions: {
        drawerLabel: 'Week',
        drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />,
      }
    },
    reminderStack: {
      screen: ReminderStack,
      navigationOptions: {
        drawerLabel: 'Notifications',
        drawerIcon: ()=> <Image source={NotifIcon} style={styles.imageStyle} />
      }
    },
    globalDrugListScreen: {
      screen: withHeader(GlobalDrugListScreen,'globalDrugListScreen', {
        headerRight: <GlobalDrugListHeaderRight />
      }),
      navigationOptions: {
        drawerLabel: 'Global Drug List',
        drawerIcon: () => <Image source={DrugIcon} style={styles.imageStyle} />
      }
    },
    shareDrugScreen: {
      screen: withHeader(ShareDrugScreen,'shareDrugScreen'),
      navigationOptions: {
        drawerLabel: 'Export Summary',
        drawerIcon: () => <Image source={ExportIcon} style={styles.imageStyle} />
      }
    },
    editDrugScreen: {
      screen: EditDrugScreen
    },
    logout: {
      screen: LoginScreen,
    },
    termsAndConditionsScreen: {
      screen: withHeader(TermsAndConditionsScreen,'termsAndConditionsScreen'),
      navigationOptions: {
        drawerLabel: 'Terms and Conditions',
        drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
      }
    },
    privacyPolicyScreen: {
      screen: withHeader(PrivacyPolicyScreen,'privacyPolicyScreen'),
      navigationOptions: {
        drawerLabel: 'Privacy Policy',
        drawerIcon: () => <Image source={SettingsIcon} style={styles.imageStyle} />
      },
    },
    
    notificationScreen: {
      screen: NotificationScreen
    },
    addDrugScreen: {
      screen: withHeader(AddDrugScreen, 'addDrugScreen'),
      ...doNotAppearOnDrawer,
    },
    cameraScreen: {
      screen: withHeader(CameraScreen, 'camerScreen'),
      ...doNotAppearOnDrawer,
    },
  },
  {
    initialRouteName: 'dayViewScreen',
    contentComponent: CustomDrawer,
    drawerWidth: Math.min(height, width) * 0.88,
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 14,
        marginLeft: '5.3%'
      }
    },
    cardStyle: {
      shadowColor: 'transparent'
    }
  }
);

export default createAppContainer(DrawerNavigation);
