import React from "react";
import styles from './TrackList.module.css';
import Track from '../Track/Track';

function Tracklist (props) {
  const tracks = props.userSearchResults
  
    return (
        <div className={styles.TrackList}>
        {tracks.map(track => 
          <Track
          track={track}
          key={track.id}
           id={track.id} 
          name={track.name}
          artist={track.artist}
          album={track.album} 
          isRemoval={false} />
        )}
        
        
      </div>
    );
}

export default Tracklist;