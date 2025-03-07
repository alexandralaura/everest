import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist.js';

function App () {
    const [Results, setResults] = useState([
     {id: 1,
    name: 'opossum',
    artist: 'alex',
    album: 'warranwood'
    },
    {
      id: 2,
      name: 'feather',
      artist: 'bowie',
      album: 'cute'
    },
    {
      id:3,
      name: 'feline',
      artist: 'elsie',
      album: 'smile'
    }
    ]);
    const [playlistName, setPlaylistName] = useState("Alexandras Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([
      {
        id: 6,
        name: 'love',
        artist: 'jai',
        album: 'ringwood'
      },
      {
        id: 7,
        name: 'i love you so much',
        artist: 'lover',
        album: 'croydon'
      },
      {
        id: 8,
        name: 'To be in love',
        artist: 'area 51',
        album: 'box hill'
      }
    ]);  
     function addTrack(track) {
      const isTrackThere = playlistTracks.includes(track.id);
      if (isTrackThere) {
        console.log("track already exists")
      } else {
        const add = playlistTracks.concat(track);
        setPlaylistTracks(add);
      }
     }
     function removeTrack(track) {
      const newPlaylist = playlistTracks.filter((song) => song.id !== track.id);
      setPlaylistTracks(newPlaylist);
     }
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          
          <div className={styles['App-playlist']}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={Results} onAdd={addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
          </div>
        </div>
      </div>
        );
}

export default App;
