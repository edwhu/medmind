import { DrawerNavigator, StackNavigator } from 'react-navigation';


const DrawerNavigation = DrawerNavigator(
  {
    firstScreen: {
      screen: FirstScreen
    },
    secondScreen: {
      screen: SecondScreen
    }
  },
  {
    initialRouteName: 'firstScreen',
    // contentComponent: DrawerComponent
  }
)

const DrawerStack = StackNavigator(
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



export const AppStackNavigator = StackNavigator(
  {
    someStack: {
      screen: SomeStack
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