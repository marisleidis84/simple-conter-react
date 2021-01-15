import React from 'react';
import './App.css';
import SecondsCounter from './secondscounter';

const App = (props) => {
  return (
    <div className='container bg-dark'>
      <div className='row' id='counter bg-dark'>
        <div className='col-md-12 d-flex justify-content-center text-white bg-dark '>
          <SecondsCounter icon="fas fa-clock fa-2x mb-2 bg-dark" />
          <SecondsCounter number={props.num6} />
          <SecondsCounter number={props.num5} />
          <SecondsCounter number={props.num4} />
          <SecondsCounter number={props.num3} />
          <SecondsCounter number={props.num2} />
          <SecondsCounter number={props.num1} />
        </div>
      </div>
    </div>
  );
}

export default App;