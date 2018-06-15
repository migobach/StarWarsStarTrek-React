import React from 'react';
import axios from 'axios';
import {
  Grid,
  List,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react';
import Character from './Character';
import Location from './Location';
import StarWarsLogo from '../images/starwars.jpg'

class StarWars extends React.Component {
  state = { characters: [], locations: [] }

  //lifecycle method
  componentDidMount() {
    axios.get('/api/characters?nerd_type=starwars')
      .then( res => {
        this.setState({ characters: res.data })
      })
      .catch( err => {
        console.log(err)
      })

    axios.get('/api/locations?nerd_type=starwars')
      .then( res => {
        this.setState({ locations: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  resetCharacterState = (id) => {
    const { characters } = this.state 
    this.setState({
      characters: characters.filter( c => c.id !== id )
    })
  }

  displayCharacters = () => {
    return this.state.characters.map( character => {
      return(
        <Character key={character.id} character={character} resetCharacters={this.resetCharacterState}/>
      );
    })
  }

  displayLocations = () => {
    return this.state.locations.map( location => {
      return(
        <Location key={location.id} location={location} />
      )
    })
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1'>Star Wars</Header>
        <Image style={styles.logo} src={StarWarsLogo} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h2'>Characters</Header>
              <List bulleted>
                { this.displayCharacters() }
              </List>
            </Grid.Column>

            <Grid.Column width={8}>
              <Header as='h2'>Locations</Header>
              <List bulleted>
                { this.displayLocations() }
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
const styles = {
  logo: {
    width: '50px'
  }
}


export default StarWars;