import React from 'react'
import App from './App'
import { AppRegistry, View } from 'react-native'
const AppIOS = () => (
  <View style={{ flex: 1, paddingTop: 20 }}>
    <App />
  </View>
)

AppRegistry.registerComponent('RockTheVote', () => AppIOS);
