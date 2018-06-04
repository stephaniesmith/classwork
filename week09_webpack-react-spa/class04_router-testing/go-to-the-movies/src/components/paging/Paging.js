import React, { Component } from 'react';

export default class Paging extends Component {
  
  render() {
    const { page, onPage } = this.props;

    return (
      <div>
        <button 
          disabled={page === 1}
          onClick={() => onPage(+page - 1)}>&lt; prev</button>
        
        {page}
        
        <button onClick={() => onPage(+page + 1)}>next &gt;</button>
      </div>
    )
  }
}