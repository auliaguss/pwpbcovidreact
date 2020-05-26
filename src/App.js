import React from 'react';
import logo from './logo.svg';
import Navbar from './komponen/navbar'
import DaftarBerita from './komponen/daftarBerita'
import Headline from './komponen/headline'
import './App.css';
import './desain'

function App() {
  return (
    <div className="App">
      <Headline />
      <div id="utama">
        <Navbar/>
      </div>
      <DaftarBerita />
    </div>
  );
}

export default App;
