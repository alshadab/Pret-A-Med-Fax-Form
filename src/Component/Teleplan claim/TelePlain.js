import React from 'react';
import TextField from '@mui/material/TextField';

const TelePlain = () => {
  return (
    <div className='border-2'>
        <h2 style={{backgroundColor:"black",color:"white",padding:"7px"}}>TELEPLAN CLAIM SUBMISSON INFORMATION</h2>
        <h4 style={{textAlign:"center"}}>DATA CENTRE INFORMATION</h4>
        <hr/>
      <div className="flex">
        <div style={{padding:"30px"}} className='borderStyle'>
          <h2>NEW DATA CENTER</h2>
          <div style={{ display: '', gap: '6px' }}>
            <p>Name</p>
            <TextField id="filled-basic" label="" variant="filled" />
            <p>CONTACT</p>
            <TextField id="filled-basic" label="" variant="filled" />
          </div>
        </div>
        <div style={{padding:"30px"}} className='borderStyle'>
          <h2>NEW DATA CENTER</h2>
          <div style={{ display: '', gap: '6px' }}>
            <p>Name</p>
            <TextField id="filled-basic" label="" variant="filled" />
            <p>CONTACT</p>
            <TextField id="filled-basic" label="" variant="filled" />
          </div>
        </div>
        <div style={{padding:"30px"}} className='borderStyle'>
          <h2>NEW DATA CENTER</h2>
          
            <p>Name</p>
            <TextField id="filled-basic" label="" variant="filled" />
            <p>CONTACT</p>
            <TextField id="filled-basic" label="" variant="filled" />
        </div>
      </div>
    </div>
  );
};

export default TelePlain;
