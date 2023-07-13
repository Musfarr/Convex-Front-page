import React from 'react';
import './App.css';
import Head from './components/head';
import Bar from './components/bar';
import Img from './components/img';
import Foot from './components/footer';


function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: `url('../pics/bg2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Bar />

      <div className='my-64'>
      <Head />
      </div>
      <Img />

      <Foot/>
    </div>
  );
}

export default App;
