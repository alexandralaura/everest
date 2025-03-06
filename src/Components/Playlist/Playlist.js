import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={props.playlistName} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks} />
      <button className={styles['Playlist-save']}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;