import React, { Component } from 'react'
import StarWars from './components/StarWars'
import StarTrek from './components/StarTrek'

class App extends Component {
  state = { starwars: true }

  toggleNerds = () => {
    this.setState({ starwars: !this.state.starwars })
  }

  render() {
    if(this.state.starwars)
      return(
        <div>
          <button onClick={ this.toggleNerds }>Toggle Star Trek</button> 
          <StarWars /> 
        </div>
      )
    else
      return(
        <div>
          <button onClick={ this.toggleNerds }>Toggle Star Wars</button>
          <StarTrek />
        </div>
      )
  }
}

export default App;
