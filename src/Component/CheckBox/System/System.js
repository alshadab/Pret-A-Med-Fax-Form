import React from 'react';
import './System.css';
import Billing from '../../Billing/Business/Billing';
import TextField from '@mui/material/TextField';


const System = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>SYSTEM</h3>
      <hr />
      <h4 style={{ textAlign: 'start' }}>HARDWARE</h4>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <p>MAKE/MODEL OF COMPUTER:</p>
          <TextField id="filled-basic" label="" variant="filled" />
        </div>
        <br/>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', flexDirection: '' }}>
            <p>MAKE/MODEL OF MODEM:</p>
            <TextField id="filled-basic" label="" variant="filled" />
          </div>

          <div style={{ display: 'flex', flexDirection: '' }}>
            <div>
              <div style={{ display: 'flex' }}>
                <input type="radio" style={{ width: '15px' }} />
                <p>INT</p>
              </div>
              <div style={{ display: 'flex' }}>
                <input type="radio" style={{ width: '15px' }} />
                <p>EXT</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexDirection: '' }}>
              <p>SPEED:</p>
              <TextField id="filled-basic" label="" variant="filled" />
            </div>
          </div>
        </div>
      </div>
      <Billing/>
    </div>
  );
};

export default System;
