import React from 'react'
import {
  ListView,
} from 'react-native'
import Proposition from './Proposition'
const URL = 'https://gist.githubusercontent.com/tonysherbondy/70506381d9987f2b2a2527b7e4988a10/raw/f19a9077ce6a567be661afd08d5a7d6a25bcedd1/california_propositions.json'

class App extends React.Component {
  state = {
    decision: '?',
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(({ propositions }) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(propositions)
        })
      })
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={row => <Proposition info={row} />}
      />
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
}
export default App
