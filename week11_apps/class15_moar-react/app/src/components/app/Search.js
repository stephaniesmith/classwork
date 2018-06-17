import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    search: ''
  };

  componentDidMount() {
    this.searchInput.focus();
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }


  render() {
    const { search } = this.state;
    return (
      <form>
        <input ref={node => this.searchInput = node} 
          value={search} 
          onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    );
  }
}
