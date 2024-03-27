import React from "react";
import TextField from "@mui/material/TextField";

const TelePlan = () => {
  return (
    <div className="border-2">
      <h5
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "4px",
          borderRadius: "5px",
        }}
      >
        TELEPLAN CLAIM SUBMISSON INFORMATION
      </h5>
      <h5 style={{ textAlign: "center" }}>DATA CENTRE INFORMATION</h5>
      <hr />
      <div className="flex">
        <div className="flex-up">
          <h6>NEW DATA CENTER</h6>
          <div>
            <label>
              Name:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="name"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
            <br />
            <label>
              Contact:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="contact"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
          </div>
        </div>

        <div className="flex-up">
          <h6>JOINING EXISTING DATA CENTRE</h6>
          <div>
            <label>
              Name:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="name"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
            <br />
            <label>
              Contact:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="contact"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
          </div>
        </div>
        <div className="flex-up">
          <h6>JOINING SERVICE BUREAU</h6>

          <div>
            <label>
              Name:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="name"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
            <br />
            <label>
              Contact:
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="contact"
                className="small-input MuiInputBase-input"
                style={{ width: "100%" }}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelePlan;
