import React, { Component } from 'react';
import styles from './App.css';
import { search } from '../services/newsApi';
import logo from './logo.png';
import Search from './Search';
import Articles from './Articles';
import Paging from './Paging';

export default class App extends Component {

  state = {
    topic: '',
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 20,
    articles: []
  };

  searchNews = () => {
    const { topic, page, perPage } = this.state;

    this.setState({ loading: true });
    
    search({ topic }, { page, perPage })
      .then(({ articles, totalResults }) => {
        this.setState({ articles, totalResults, error: null });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));

  };

  handleSearch = ({ search }) => {
    this.setState({ topic: search }, this.searchNews);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchNews);
  };

  render() {
    const { articles, loading, totalResults, page, perPage, error } = this.state;

    return (
      <div>
        <header>
          <div className="header-container">
            <img src={logo}/>
            <h1>News Search</h1>
          </div>
          <div className="search-container">
            <Search onSearch={this.handleSearch}/>
          </div>
        </header>
        <main>
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>Error :( {error.message}</div>}
          </section>
          <section>
            <Paging 
              totalResults={totalResults}
              page={page}
              perPage={perPage}
              onPage={this.handlePage}/>
            <Articles articles={articles}/>
          </section>
        
        </main>
      </div>
    );
  }
}