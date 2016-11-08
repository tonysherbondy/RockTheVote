import React from 'react'
import {
  ListView,
} from 'react-native'
import Proposition from './Proposition'

// <Button
//   decision={this.state.decision}
//   onPress={decision => this.setState({ decision })}
// />

const URL = 'https://gist.githubusercontent.com/tonysherbondy/70506381d9987f2b2a2527b7e4988a10/raw/8b667e756288548e8d9a8aae35aa7634abf8bce3/california_propositions.json'

class App extends React.Component {
  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  }
  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(({ propositions }) => {
        this.propositions = {}
        propositions.forEach(p => {
          this.propositions[p.propCode] = {
            ...p,
            decision: 'Yes'
          }
        })
        this.setListState()
      })
  }
  setListState = () => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Object.values(this.propositions))
    })
  }
  propositions = {}
  renderRow = row => {
    return (
      <Proposition
        info={row}
        onChangeVote={(propCode, d) => {
          const p = this.propositions[propCode]
          this.propositions[propCode] = {
            ...p,
            decision: d,
          }
          this.setListState()
        }}
      />
    )
  }
  render() {
    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}
export default App
