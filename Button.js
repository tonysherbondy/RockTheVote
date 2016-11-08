import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const getNextDecision = d => {
  if (d === '?') return 'Yes'
  if (d === 'Yes') return 'No'
  return '?'
}
const Button = ({ decision, onPress, propCode }) => (
  <TouchableOpacity onPress={() => onPress(getNextDecision(decision))}>
    <View>
      <Text>{decision} on {propCode}</Text>
    </View>
  </TouchableOpacity>
)
Button.propTypes = {
  decision: React.PropTypes.oneOf(['Yes', 'No', '?']).isRequired,
  onPress: React.PropTypes.func.isRequired,
}
export default Button
