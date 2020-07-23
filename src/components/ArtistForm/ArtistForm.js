import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ArtistForm extends Component {
  state = {
    // artists: [
    //   {
    //     name: '',
    //   },
    // ],
    newArtist: {
      name: '',
    },
  };

  handleChange = (event) => {
    this.setState({
      newArtist: {
        ...this.state.newArtist,
        name: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding an artist`, this.state.newArtist);
    this.postNewArtist(this.state.newArtist);
    this.setState({
      newArtist: {
        name: '',
      },
    });
  };

  postNewArtist(newArtist) {
    console.log(newArtist);
    axios
      .post('/artist', newArtist)
      .then((response) => {
        console.log('server post:', response.data);
        this.props.refreshArtists();
      })
      .catch((error) => {
        console.log('error in post', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Add Artist</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-style"
            value={this.state.newArtist.name}
            onChange={this.handleChange}
            required
            placeholder="Artist Name"
          ></input>
          <button className="form-style">Add New Artist</button>
        </form>
      </div>
    );
  }
}

export default connect()(ArtistForm);
