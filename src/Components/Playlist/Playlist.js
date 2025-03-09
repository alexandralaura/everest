import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange(e) {
    props.onNameChange(e.target.value)
  }
  return (
    <div className={styles.Playlist}>
      <input defaultValue={props.playlistName} onChange={handleNameChange} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks} isRemoval={true} onRemove={props.onRemove}/>
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;