import React from 'react'
import axios from 'axios'
import { Grid, List, Segment, Header } from 'semantic-ui-react'

class StarTrek extends React.Component {

  render() {
    return(
      <Segment basic>
        <Header as='h1'>
          Star Trek
        </Header>
      </Segment>
    )
  }
}

export default StarTrek