import React from 'react'
import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Song } from '../Context/Context';
export default function Audio() {
    const { DataSongs, song, setSong } = useContext(Song);
    const handNextSongClick = (idSong) => {
        console.log(idSong + 1);
        setSong(DataSongs[idSong + 1]);
    }
    const handPreviousSong = (idSong) => {
        console.log(idSong);
        if (idSong === 0) {
            setSong(DataSongs[idSong]);
        }
        else {
            setSong(DataSongs[idSong-1]);
        }
    }
    return (
        <AudioPlayer
            src={song.url}
            className="player-music h-24"
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={() => handNextSongClick(song.id)}
            onClickPrevious={() => { handPreviousSong(song.id) }}
        />
    )
}

