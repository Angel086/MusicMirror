import './App.css';
import Playlist from './components/Playlist';
import * as auth from './auth';
import * as playlist from './playlist';
//import React, { useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>MusicMirror</h1>
        
      </header>
        <main className="App-main">
          <Playlist />
        </main>
        <button onClick={playlist.findSongs}>RAAAAAAAAAAAAAAAAAAH</button>
        <button onClick={auth.checkCode}>Sign in</button>

      <body>
        <h1>Display your Spotify profile data</h1>

        <section id="profile">
          <h2>Logged in as <span id="displayName"></span></h2>
          <ul>
            <li>User ID: <span id="id"></span></li>
            <li>Email: <span id="email"></span></li>
            <li>Profile Image: <span id="imgUrl"></span></li>
          </ul>
        </section>
      </body>
    </div>
  );
}

export default App;
