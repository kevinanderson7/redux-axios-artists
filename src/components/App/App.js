// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import ArtistForm from './../ArtistForm/ArtistForm';
import { Link } from 'react-router-dom';

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  };

  // DOM is ready
  componentDidMount() {
    // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist',
    })
      .then((response) => {
        console.log(response);
        // response.data will be the array of artists
        // this.setState({
        //   artists: response.data,
        // });
        this.props.dispatch({
          type: 'SET_ARTISTS',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <Link className="linkStyle" to="/addArtist">
                Add Artist
              </Link>
            </div>
            <div>
              <Link className="linkStyle" to="/allArtists">
                Artist List
              </Link>
            </div>
            <h1 className="App-title">Famous Artists</h1>
          </header>
          <br />
          <ArtistList
            refreshArtists={this.refreshArtists}
            artistList={this.state.artists}
          />
          <Route exact path="/addArtist" component={ArtistForm} />
          <Route exact path="/allArtists" component={ArtistList} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
