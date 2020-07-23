// ArtistList.js

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import { connect } from 'react-redux';

class ArtistList extends Component {
  //   createArtistList() {
  //     let artistListForDom = [];
  //     for (let i = 0; i < this.props.store.artistReducer.length; i += 1) {
  //       let artist = this.props.store.artistReducer[i];
  //       let artistRow = (
  //         <ArtistListItem
  //           key={i}
  //           refreshArtists={this.props.refreshArtists}
  //           artist={artist}
  //         />
  //       );
  //       artistListForDom.push(artistRow);
  //     }
  //     return artistListForDom;
  //   }

  render() {
    return (
      <div>
        <table>
          {/* <tbody>{this.createArtistList()}</tbody> */}
          <tbody>
            {this.props.store.artistReducer.map((artist, i) => {
              return <ArtistListItem key={i} artist={artist} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store: store,
  };
};

export default connect(mapStoreToProps)(ArtistList);
