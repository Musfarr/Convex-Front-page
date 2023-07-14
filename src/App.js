import React from 'react';
import './App.css';
import Head from './components/head';
import Bar from './components/bar';
import Img from './components/img';
import Foot from './components/footer';
import Logos from './components/logos';
// import bgImg from './public/pics/s1.jpg';

function App() {
  return (
    <div>
    <div
      className='App bgImage'
      style={{
        // backgroundImage: {bgImg},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
      <Bar />

      <div className='mt-48' >
      <Head />
      </div>

    </div>

      <Img />
      <Logos/>
      <Foot/>
</div>
  );
}

export default App;
