import React from 'react'
import axios from 'axios'
import { List, Button, Input } from 'semantic-ui-react'

class Character extends React.Component {
  state = { editing: false, name: this.props.character.name }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  deleteCharacter = () => {
    let id = this.props.character.id 
    axios.delete(`/api/characters/${id}`)
      .then( res => {
        this.props.resetCharacters(id)
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  cancelEdit = () => {
    this.setState({ editing: false, name: this.props.character.name }) // this is not working if you save and then click, and hit cancel. Can you figure out why? 
  }

  editCharacter = () => {
    let id = this.props.character.id 
    axios.put(`/api/characters/${id}`, { character: { name: this.state.name }} )
      .then( res => {
        this.setState({ name: res.data.name })
        this.toggleEdit()
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    if(this.state.editing)
      return(
        <List.Item>
          <Input type='text' defaultValue={ this.state.name } onChange={ this.handleChange } />
          <Button onClick={ this.cancelEdit }>Cancel</Button>
          <Button primary onClick={ this.editCharacter }>Save</Button>
          <Button color='red' onClick={this.deleteCharacter}>Delete</Button>
        </List.Item>
      ) 
    else
      return(
        <List.Item onClick={ this.toggleEdit }> 
          { this.state.name }  
        </List.Item>
      )
  }
}

export default Character
