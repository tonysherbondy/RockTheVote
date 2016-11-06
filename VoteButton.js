import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const getNextDecision = d => {
  if (d === '?') return 'yes'
  if (d === 'yes') return 'no'
  return '?'
}

const VoteButton = ({ decision, onPress }) => (
  <TouchableOpacity onPress={() => onPress(getNextDecision(decision))}>
    <View style={styles.button}>
      <Text style={styles.text}>{decision}</Text>
    </View>
  </TouchableOpacity>
)
VoteButton.propTypes = {
  decision: React.PropTypes.oneOf(['yes', 'no', '?'])
}
const styles = {
  text: {
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgb(55, 72, 145)',
  }
}
export default VoteButton
