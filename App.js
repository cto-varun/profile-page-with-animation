import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';

// navigation
import AppNavigator from './src/navigation/AppNavigator';

// redux imports
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {

  const [loaded] = useFonts({
    MontReg: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontMed: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}