import React from 'react'
import {
  Navigator,
  WebView,
} from 'react-native'
import Propositions from './Propositions'

const NavApp = () => {
  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ title: 'list' }}
      renderScene={(route, navigator) => {
        if (route.title === 'list') {
          return (
            <Propositions onPressRow={propCode => navigator.push({ title: propCode })} />
          )
        }
        return <WebView source={{ uri: `https://ballot.fyi/${route.title}` }} />
      }}
    />
  )
}
export default NavApp
