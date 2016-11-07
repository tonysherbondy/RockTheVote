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

const VoteButton = ({ propCode, style, decision, onPress }) => (
  <TouchableOpacity style={style} onPress={() => onPress(getNextDecision(decision))}>
    <View style={styles.button}>
      <Text style={styles.text}>{decision} on {propCode}</Text>
    </View>
  </TouchableOpacity>
)
VoteButton.propTypes = {
  decision: React.PropTypes.oneOf(['yes', 'no', '?'])
}
const styles = {
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(52, 52, 52)'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  }
}
export default VoteButton
