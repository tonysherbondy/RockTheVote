import React from 'react'
import {
  View,
  Platform,
} from 'react-native'
import VoteButton from './VoteButton'

class App extends React.Component {
  state = {
    decision: '?',
  }
  render() {
    return (
      <View style={styles.container}>
        <VoteButton
          decision={this.state.decision}
          onPress={decision => this.setState({ decision })}
        />
      </View>
    )
  }
}
const styles = {
  container: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
}
export default App
