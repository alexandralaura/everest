import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from '../SearchResults/SearchResults.js';

function App () {
    const [Results, setResults] = useState(
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
    );
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={Results} />
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
        );
}

export default App;
