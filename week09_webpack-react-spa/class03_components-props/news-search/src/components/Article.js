import React, { Component } from 'react';

export default class Article extends Component {

  render() {
    const { title, author, description, publishedAt, url, urlToImage } = this.props.article;
    
    return (
      <li>
        <h2>{title} by {author} on {publishedAt}</h2>
        <a href={url} target="_blank">view article</a>
        <p>{description}</p>
        <img src={urlToImage}/>
      </li>
    );
  }
}