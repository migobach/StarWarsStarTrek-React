import React from 'react'
import axios from 'axios'
import { List, Button, Input } from 'semantic-ui-react'

class Location extends React.Component {
  state = { name: this.props.location.name }

  render() {
    return(
      <List.Item>
        { this.state.name }  
      </List.Item>
    )
  }
}

export default Location