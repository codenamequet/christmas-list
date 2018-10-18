import React, {Component} from 'react'
import Header from './Header'
import List from './List'

class App extends Component {
  state = {
    person: {},
    presents: {}
  }

  render() {
    return (
      <div className="christmas-list">
        <Header />
        <List 
        person={this.state.person} 
        presents={this.state.presents} 
        />
      </div>
    )
  }
}

export default App;
