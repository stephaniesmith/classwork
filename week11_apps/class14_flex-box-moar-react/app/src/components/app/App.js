import React, { Component } from 'react';
import styles from './App.css';
import { getUrl } from '../../services/images';

const options = 'e_sepia:80,c_scale,w_100';

export default class App extends Component {

  render() {
    const src = 'https://ladylibertyflag.com/wp-content/uploads/2015/11/PIRATE-3X5-V1-607.jpg';
    
    return (
      <main className={styles.app}>
        <h1>Demos</h1>

        <h2>Response Image with Cloudinary <strong>fetch</strong></h2>
        <img className="image" src={src}/>

      </main>
    );
  }
}