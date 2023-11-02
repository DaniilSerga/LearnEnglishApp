import React, {FC} from 'react';
import HomePage from '../HomeScreen/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Authorization">
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
