import React, { Component } from 'react';
//import logo from '.../logo.svg';
import './App.css';
import Playlist from '../Components/Playlist/Playlist';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        name:'',
        artist:'',
        album:'',
        id:'',
      ],
      playlistName: "Name",
      playlistTracks: [
         {name:'',
        artist:'',
        album:'',
        id:''
      },
      {name:'',
     artist:'',
     album:'',
     id:''
   }]};

     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlaylistName = this.updatePlaylistName.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);
  };

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } this.setState(playlistTracks);
  }

  removeTrack(track) {
    if (this.state.playlistTracks.filter(savedTrack => savedTrack.id === track.id)) {
      return;
    } this.setState(playlistTracks);
  }

  updatePlaylistName (name) {
    this.setState(playlistName);
  }

  savePlaylist () {
    trackURIs = [
      {uri:{playlistTracks}}
    ]
  }

  search (term) {
    console.log({term});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} onAdd= {this.addTrack}/>
           <Playlist playlistName= {this.state.playlistName} playlistTracks= {this.state.playlistTracks}
           onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
