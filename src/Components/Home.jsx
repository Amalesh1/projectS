import React from 'react';
import Cards from './Cards'
import Countdown from './Countdown';
import TimeSince from './TimeSince';

const Home =()=> {
  return (
    <div className='Home'>
        <Countdown />
        <br />
        <TimeSince pastDate="2024-06-13T10:04:00"/>
        <br/>
        <Cards />
    </div>
  );
}

export default Home;
