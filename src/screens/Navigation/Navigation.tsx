import React, {FC, useState} from 'react';
// import AuthScreen from '../AuthScreen/AuthScreen';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const GeneralNavigator: FC = () => {
  const [screenState, setScreenState] = useState<'app' | 'onboarding'>(
    'onboarding',
  );

  const renderNavigator = () => {
    switch (screenState) {
      case 'app':
        return <AppNavigator />;
      case 'onboarding':
        return <AuthNavigator setLogged={setScreenState} />;
      default:
    }
  };

  return <NavigationContainer>{renderNavigator()}</NavigationContainer>;
};

export default GeneralNavigator;
