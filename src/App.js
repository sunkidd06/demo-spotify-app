import Audio from "./components/Audio";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import { Song } from "./Context/Context";
import DataSongs from './Data/songs.json';
import "./App.css"
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  return (
    <div className="App">
      <Song.Provider value={{DataSongs, song, setSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span1 */}
          <DetailSong />
          {/* span 3 */}
          <ListSong  />
        </div>
            <Audio  />
      </Song.Provider>
    </div>
  );
}

export default App;
