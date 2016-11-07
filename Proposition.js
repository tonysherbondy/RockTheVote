import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'
import VoteButton from './VoteButton'

const PlatformTouchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
const Proposition = ({ info, onChangeVote, onSelect }) => {
  return (
    <PlatformTouchable onPress={onSelect}>
      <View style={[styles.proposition, { backgroundColor: info.color }]}>
        <Image resizeMode="contain" style={styles.image} source={{ uri: info.imageUrl }} />
        <Text style={styles.topText}>{info.title}</Text>
        <View style={styles.propositionBadge}>
          <Text style={styles.bottomText}>{info.subTitle}</Text>
          <VoteButton
            propCode={info.propCode}
            style={styles.codeText}
            decision={info.decision}
            onPress={onChangeVote}
          />
        </View>
      </View>
    </PlatformTouchable>
  )
}
const styles = {
  proposition: {
    margin: 5,
    height: 250,
    justifyContent: 'space-between',
  },
  image: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 100,
    bottom: 50,
  },
  propositionBadge: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 30,
    backgroundColor: 'rgba(17, 17, 17, 0.37)',
  },
  topText: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingTop: 20,
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  bottomText: {
    flex: 3,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  codeText: {
    flex: 2,
  }
}
export default Proposition
