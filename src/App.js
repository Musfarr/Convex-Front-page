import React from 'react';
import './App.css';
import Head from './components/head';
import Bar from './components/bar';
import Img from './components/img';
import Foot from './components/footer';
import Logos from './components/logos';


function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: `url('https://www.convexinteractive.com/images/portfolio/img-portfolio-hero-image-mobile.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Bar />

      <div className='my-32'>
      <Head />
      </div>
      <Img />
      <Logos/>

    <div className='mt-32'>
      <Foot/>
    </div>  
    </div>
  );
}

export default App;
