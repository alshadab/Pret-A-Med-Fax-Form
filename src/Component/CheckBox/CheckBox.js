import React from 'react';

import './CheckBox.css'

const CheckBox = () => {
  return (
    <>
  <h2 style={{backgroundColor:"black",color:"white",padding:"7px"}}>TYPE Of FACILTYY</h2>
    <div className='checkbox'>
        
        <input type="checkbox" id="checkbox1" name="checkbox1" />
      <p htmlFor="checkbox1">HOSPITAL</p>
      

      <input type="checkbox" id="checkbox2" name="checkbox2" />
      <p htmlFor="checkbox2">PRACTITONER</p><br/>

      <input type="checkbox" id="checkbox3" name="checkbox3" />
      <p htmlFor="checkbox3">SERVICE BUREAU</p><br/>

      <input type="checkbox" id="checkbox4" name="checkbox4" />
      <p htmlFor="checkbox4">VENDOOR</p><br/>

      <input type="checkbox" id="checkbox5" name="checkbox5" />
      <p htmlFor="checkbox5">CLINIC</p><br/>
    </div>
    </>
  );
};

export default CheckBox;
