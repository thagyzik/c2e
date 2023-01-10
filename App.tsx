import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
        <Routes />
    </>
  );
}