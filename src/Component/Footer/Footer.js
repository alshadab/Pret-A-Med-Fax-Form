import React from 'react'
import {TextField} from '@mui/material';

const Footer = () => {
  return (
    <div className='contact-form-container-footer '>
        <h5>I MAKE APPLICATION TO UNILIZE TO UTILIZE TELEPLAN CLAIMS SUBMISSION SERVICE WITH THE FULL UNDERSTANDING OF,AND<br/>
        AGREEMENT WITH,THE REGULARTONS TO THE MEDICARE PROTECTION ACT.</h5>
        <div style={{display:"flex",flexWrap:'wrap'}}>
            <div>

        <TextField id="filled-basic" label="" variant="filled" />
           <p>Date:</p>
            </div>
            <div>

        <TextField id="filled-basic" label="" variant="filled" />
           <p>MSP PAYEE NUMBER</p>
           <p style={{ fontWeight: 'bold' }}>NOTE:AN APPLICATION FORMS IS REQUIRED FOR EVERY PAYEE NUMBER</p>
            </div>
            

        </div>
    </div>
  )
}

export default Footer