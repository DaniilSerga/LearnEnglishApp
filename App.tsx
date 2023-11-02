import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Navigation from './src/screens/Navigation/Navigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
