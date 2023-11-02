import React, {FC, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthScreen: FC = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Authorization</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.emailBox}
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.nativeEvent.text)}
        />
        <TextInput
          style={styles.passwordBox}
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.nativeEvent.text)}
          secureTextEntry
        />
      </View>
      <View style={styles.submitContainer}>
        <View style={styles.buttonContainer}>
          <Button color="rgb(255, 255, 255)" title="Sign in" />
        </View>
        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <Text style={styles.signUpLink} onPress={() => redirectToSignUp()}>
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 15,
    marginTop: 20,
  },
  headingText: {
    fontSize: 24,
  },
  emailBox: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
  passwordBox: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
  submitContainer: {
    marginTop: 20,
    width: '80%',
    gap: 5,
  },
  buttonContainer: {
    backgroundColor: 'rgb(172, 79, 214)',
    borderRadius: 5,
  },
  signUpContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signUpLink: {
    color: 'rgb(172, 79, 214)',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;
