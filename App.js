import React from 'react'
import {
  ListView,
} from 'react-native'
import Proposition from './Proposition'
const URL = 'https://gist.githubusercontent.com/tonysherbondy/70506381d9987f2b2a2527b7e4988a10/raw/f19a9077ce6a567be661afd08d5a7d6a25bcedd1/california_propositions.json'

class App extends React.Component {
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  }
  propositions = {}
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(({ propositions }) => {
        this.propositions = {}
        propositions.forEach(p => {
          this.propositions[p.prop_code] = {
            ...p,
            propCode: p.prop_code,
            decision: '?'
          }
        })
        this.setListState()
      })
  }
  setListState() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Object.values(this.propositions))
    })
  }
  render() {
    const onChangeVote = (propCode, decision) => {
      const p = this.propositions[propCode]
      this.propositions[propCode] = {
        ...p,
        decision
      }
      this.setListState()
    }
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={row => (
          <Proposition
            info={row}
            onChangeVote={d => onChangeVote(row.propCode, d)}
          />
        )}
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
