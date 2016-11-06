import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
const Proposition = ({ info }) => (
  <View style={styles.proposition}>
    <Image resizeMode="contain" style={styles.image} source={{ uri: info.image_url }} />
    <Text style={styles.topText}>{info.title}</Text>
    <View style={styles.propositionBadge}>
      <Text style={styles.bottomText}>{info.sub_title}</Text>
      <Text style={styles.codeText}>{info.prop_code}</Text>
    </View>
  </View>
)
const styles = {
  proposition: {
    margin: 5,
    height: 300,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(111, 128, 222)',
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
  },
  bottomText: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 14,
    color: 'white',
  },
  codeText: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(50, 50, 50, 0.8)',
  }
}
export default Proposition
