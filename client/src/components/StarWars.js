import React from 'react'
import axios from 'axios'
import { Grid, List, Segment, Header } from 'semantic-ui-react'

class StarWars extends React.Component {

  render() {
    return(
      <Segment basic>
        <Header as='h1'>
          Star Wars
        </Header>
      </Segment>
    )
  }
}

export default StarWars