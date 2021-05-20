import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), 
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded) { // if fontLoaded is false
    //use AppLoading to start fetching fonts, when fonts are fetched set fontLoaded to true to return usual view
    return <AppLoading startAsync={fetchFonts} onFinish={() => {setFontLoaded(true)}} onError={(error) => console.log(error)} />
  } 

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
