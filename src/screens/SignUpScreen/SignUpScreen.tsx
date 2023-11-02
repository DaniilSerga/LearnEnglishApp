import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SignUpScreen: FC = ({navigation}) => {
  const redirectOnSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView>
      <Text>Registration</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Text>Have an account?</Text>
      <Text onPress={() => redirectOnSignIn()}>Sign in</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;
