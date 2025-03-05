import React from "react";
import styles from './TrackList.module.css';
import Track from '../Track/Track';

function Tracklist (props) {
  const tracks = props.userSearchResults
    return (
        <div className={styles.TrackList}>
        {}
        
        <ul>{}</ul>
      </div>
    );
}

export default Tracklist;