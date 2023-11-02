import React, {FC} from 'react';
import AuthScreen from '../AuthScreen/AuthScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import {AuthNavigatorProps} from './type';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigator: FC<AuthNavigatorProps> = ({setLogged}) => {
  return (
    <Stack.Navigator initialRouteName="Authorization">
      <Stack.Screen
        name="SignIn"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
