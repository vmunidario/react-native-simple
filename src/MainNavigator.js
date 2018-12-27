import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBar from './components/TabBar';
import SideBar from './components/SideBar';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import MapScreen from './screens/Map';
import SettingsScreen from './screens/Settings';
import AccordionScreen from './screens/Accordion';
import ListScreen from './screens/List';

const TabStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarComponent: props => <TabBar {...props}/>
  }
);

const Drawer = createDrawerNavigator(
  {
    TabStack: { screen: TabStack },
    Accordion: { screen: AccordionScreen },
    List: { screen: ListScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: 'TabStack',
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createAppContainer(createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      header: false,
    }
  }
));

export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
