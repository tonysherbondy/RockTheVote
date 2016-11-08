import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Button from './Button'

const Proposition = ({ info, onChangeVote }) => {
  return (
    <View style={[styles.container, { backgroundColor: info.color }]}>
      <Text style={[styles.text, styles.title]}>{info.title}</Text>
      <View style={styles.badge}>
        <Text style={[styles.text, { flex: 1 }]}>{info.subTitle}</Text>
        <View style={styles.button}>
          <Button
            decision={info.decision}
            propCode={info.propCode}
            onPress={d => onChangeVote(info.propCode, d)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 250,
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
  },
  propCode: {
    flex: 1,
    color: 'rgb(20, 20, 20)',
    fontSize: 24,
  },
  badge: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(6, 6, 6, 0.5)',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}
export default Proposition
