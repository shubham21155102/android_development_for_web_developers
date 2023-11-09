import React from 'react';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
      <div style={{ flex: '20%', borderRight: '10px solid white' ,margin:"auto",backgroundColor:"green" }}>
        <Left />
      </div>
      <div style={{ flex: '40%', borderRight: '5px dotted white' ,margin:"auto"  }}>
        <Middle />
      </div>
      <div style={{ flex: '40%' ,margin:"auto"  }}>
        <Right />
      </div>
    </div>
  );
};

export default LandingPage;
