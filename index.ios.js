import React from 'react'
import { View, AppRegistry } from 'react-native'
import App from './App'
const AppIOS = () => (
  <View style={{ flex: 1, paddingTop: 20 }}>
    <App />
  </View>
)
AppRegistry.registerComponent('RockTheVote', () => AppIOS);
