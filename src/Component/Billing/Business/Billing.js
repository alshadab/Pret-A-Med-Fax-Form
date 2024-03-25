import React from 'react'
import TextField from '@mui/material/TextField';

const Billing = () => {
  return (
    <div>
        <h3>BILLING/BUSINESS OF SOFTWARE (must be MSP texted and approed)</h3>
        <div>
            <div style={{display:"flex",gap:"20px" ,flexWrap:'wrap'}}>
                <p>SOFRWARE NAME:</p>
                <TextField id="filled-basic" label="" variant="filled" />
            </div>
            <br/>
                <div style={{display:"flex",gap:"20px",flexWrap:'wrap'}}>

                    <div style={{display:"flex",gap:"10px",flexWrap:'wrap'}}>
                        <p>VENDOOR:</p>
                        <TextField id="filled-basic" label="" variant="filled" />
                    </div>
                    <div style={{display:"flex",gap:"20px",flexWrap:'wrap'}}>
                        <p>SUPPLEIR:</p>
                        <TextField id="filled-basic" label="" variant="filled" />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Billing