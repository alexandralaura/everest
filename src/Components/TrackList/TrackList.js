import React from "react";
import styles from './TrackList.module.css';

function Tracklist () {
    return (
        <div className={styles.TrackList}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        <Track />
        <li>Track 1</li>
        <li>Track 2</li>
        <li>Track 3</li>
      </div>
    );
}

export default Tracklist;