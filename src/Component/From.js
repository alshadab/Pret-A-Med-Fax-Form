import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./From.css";
import "./CheckBox/CheckBox.css";
import { Button } from "@mui/material";

const From = ({ FillForm, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="contact-form-container">
      <h5>Mailing Address</h5>
      <form onSubmit={FillForm}>
        <label>
          Name:
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="small-input MuiInputBase-input"
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Address:
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="Address"
            className="small-input MuiInputBase-input"
            value={formData.Address}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </label>
        <div className="cityphn">
          <label>
            City:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="small-input MuiInputBase-input"
              name="City"
              value={formData.City}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
          <label>
            Postal Code:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Postal_Code"
              className="small-input MuiInputBase-input"
              value={formData.Postal_Code}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
          <label>
            Phone Number:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Phone_Number"
              className="small-input MuiInputBase-input"
              value={formData.Phone_Number}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div className="ogiName">
          <label>
            Organization Name:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Organization_Name"
              className="small-input MuiInputBase-input"
              value={formData.Organization_Name}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
          <label>
            Contact Person:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Contact_Person"
              className="small-input MuiInputBase-input"
              value={formData.Contact_Person}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <>
          <h5
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            TYPE Of FACILTYY
          </h5>
          <div className="checkbox">
            <div className="check">
              <input
                type="checkbox"
                id="checkbox1"
                name="Type_Hospital"
                value={formData.Type_Hospital}
                onChange={handleChange}
              />
              <label htmlFor="checkbox1">HOSPITAL</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="checkbox2"
                name="Type_Practitioner"
                value={formData.Type_Practitioner}
                onChange={handleChange}
              />
              <label htmlFor="checkbox2">PRACTITONER</label>
            </div>

            <div className="check">
              <input
                type="checkbox"
                id="checkbox3"
                name="Type_Service_Bureau"
                value={formData.Type_Service_Bureau}
                onChange={handleChange}
              />
              <label htmlFor="checkbox3">SERVICE BUREAU</label>
            </div>

            <div className="check">
              <input
                type="checkbox"
                id="checkbox4"
                name="Type_Vender"
                value={formData.Type_Vender}
                onChange={handleChange}
              />
              <label htmlFor="checkbox4">VENDOOR</label>
            </div>

            <div className="check">
              <input
                type="checkbox"
                id="checkbox5"
                name="Type_Clinic"
                value={formData.Type_Clinic}
                onChange={handleChange}
              />
              <label htmlFor="checkbox5">CLINIC</label>
            </div>
          </div>
        </>
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
                    name="New_Data_Centre_Name"
                    value={formData.New_Data_Centre_Name}
                    onChange={handleChange}
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
                    name="New_Data_Centre_Contact"
                    value={formData.New_Data_Centre_Contact}
                    onChange={handleChange}
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
                    name="Existing_Data_Centre_Name"
                    value={formData.Existing_Data_Centre_Name}
                    onChange={handleChange}
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
                    name="Existing_Data_Centre_Number"
                    value={formData.Existing_Data_Centre_Number}
                    onChange={handleChange}
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
                    name="Service_Bureau_Name"
                    value={formData.Service_Bureau_Name}
                    onChange={handleChange}
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
                    name="Service_Bureau_Number"
                    value={formData.Service_Bureau_Number}
                    onChange={handleChange}
                    className="small-input MuiInputBase-input"
                    style={{ width: "100%" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <h5 style={{ textAlign: "center" }}>SYSTEM</h5>
        <hr />
        <h5 style={{ textAlign: "start" }}>HARDWARE</h5>

        <label>
          MAKE/MODEL OF COMPUTER:
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="Computer_Make_Model"
            value={formData.Computer_Make_Model}
            onChange={handleChange}
            className="small-input MuiInputBase-input"
            style={{ width: "100%" }}
          />
        </label>
        {/* new */}
        <div className="system">
          <label>
            MAKE/MODEL OF MODEM:
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Modem_Make_Model"
              value={formData.Modem_Make_Model}
              onChange={handleChange}
              className="small-input MuiInputBase-input"
              style={{ width: "100%" }}
            />
          </label>

          <div>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                style={{ width: "15px", marginRight: "2px" }}
              />
              <label>INT</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                style={{ width: "15px", marginRight: "2px" }}
              />
              <label>EXT</label>
            </div>
          </div>

          <label>
            SPEED:
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Modem_Speed"
              value={formData.Modem_Speed}
              onChange={handleChange}
              className="small-input MuiInputBase-input"
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <h5 style={{ textAlign: "start" }}>
          BILLING/BUSINESS OF SOFTWARE (must be MSP texted and approved)
        </h5>

        <label>
          SOFRWARE NAME:
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="Software_Name"
            value={formData.Software_Name}
            onChange={handleChange}
            className="small-input MuiInputBase-input"
            style={{ width: "100%" }}
          />
        </label>
        <div className="cityphn">
          <label>
            VENDOR:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="small-input MuiInputBase-input"
              name="Vender_Name"
              value={formData.Vender_Name}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
          <label>
            SUPPLIER:
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="Supplier"
              className="small-input MuiInputBase-input"
              value={formData.Supplier}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <hr />
        <div className="cityphn">
          <label>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="small-input MuiInputBase-input"
              name="Signature_Date"
              value={formData.Signature_Date}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            Date:
          </label>
          <label>
            <br />
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="MSP_Payee_Number"
              className="small-input MuiInputBase-input"
              value={formData.MSP_Payee_Number}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            MSP PAYEE NUMBER <br />
            <strong>
              NOTE: AN APPLICATION FORM IS REQUIRED FOR EVERY PAYEE NUMBER
            </strong>
          </label>
        </div>
        <Button onClick={FillForm} variant="contained" color="success">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default From;
