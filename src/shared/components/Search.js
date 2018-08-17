import React, { Component } from 'react'

class Search extends Component {
  
  state = {
    query: ''
  }

  handleInputChange = event => {
    var query = event.target.value
    this.setState({ query })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert('submit')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Buscar" onChange={this.handleInputChange} value={this.state.query}/>
      </form>
    )
  }
}

export default Search