import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Song } from '../Context/Context';
export default function ListSong() {
    const { DataSongs, setSong, song } = useContext(Song);
    const [idSong, setIdSong] = useState(0);
    const handleSongClick = (idSong) => {
        setIdSong(idSong);
        setSong(DataSongs[idSong]);
    }
    useEffect(() => setIdSong(song.id),[song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white">
                    <tr>
                        <th className="w-[10%] h-12">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download" /></th>
                    </tr>
                </thead>
                <tbody className="text-neutral-400 ">
                    {
                        DataSongs.map((song) => (
                            <tr key={song.id}
                                className={`h-12 bg-slate-800 hover:bg-gray-700 ${idSong === song.id && "text-teal-400 bg-gray-700"}`}
                                onClick={() => handleSongClick(song.id)}
                            >
                                <td className="text-center">{song.id + 1}</td>
                                <td>{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center"><a href={song.url}><i className="fa fa-download" /></a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
