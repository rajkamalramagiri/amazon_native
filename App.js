import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Icon,
  Container,
  Header,
  Left,
  Body,
  Right,
  List,
  ListItem,
} from 'native-base';
// import HomeScreen from './HomeScreen';
// import SettingScreen from './SettingScreen';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContentContainer = (props) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#3a455c', height: 90}}></Header>
    </Container>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Settings" component={SettingScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
