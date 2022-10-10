import React, { useEffect, useState }  from 'react';
import axios from "axios";
import Welcome from './Welcome';
import Nav from './Nav';

const Home = () => {

  return (
    <div className='container py-3'>
      <Nav />
      <Welcome />
    </div>
  );
  
}

export default Home;
