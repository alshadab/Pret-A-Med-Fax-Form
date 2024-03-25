import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import './From.css'
import CheckBox from './CheckBox/CheckBox';
import TelePlain from './Teleplan claim/TelePlain';
import System from './CheckBox/System/System';

const From = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        organizationName: '',
        contactPerson: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          name: '',
          address: '',
          city: '',
          postalCode: '',
          phoneNumber: '',
          organizationName: '',
          contactPerson: ''
        });
      };
    
      return (
        <div className="contact-form-container">
      <h2>Mailing Address</h2>
      <form onSubmit={handleSubmit}>
        <label >
          Name:
          <TextField id="filled-basic"  variant="filled" 

 name="name" value={formData.name} onChange={handleChange}  style={{width:"100%"}}/>
        </label>
        <label>
          Address:
          <TextField id="filled-basic"  variant="filled" 
 name="address" value={formData.address} onChange={handleChange} style={{width:"100%"}}/>
        </label>
        <div className='cityphn'>

        
        <label>
          City:
          <TextField id="filled-basic"  variant="filled" 
 name="city" value={formData.city} onChange={handleChange} />
        </label>
        <label>
          Postal Code:
          <TextField id="filled-basic"  variant="filled" 
 name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <TextField id="filled-basic"  variant="filled" 
name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        </div>
        <div className='ogiName'>

        
        <label>
          Organization Name:
          <TextField id="filled-basic"  variant="filled" 
 name="organizationName" value={formData.organizationName} onChange={handleChange} />
        </label>
        <label>
          Contact Person:
          <TextField id="filled-basic"  variant="filled" 
 name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
        </label>
        </div>
      </form>
      <CheckBox/>
      <TelePlain/>
      <System/>
    </div>
      );
    }

export default From