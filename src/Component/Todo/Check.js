import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import From from "../From";

const Check = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Postal_Code: "",
    Phone_Number: "",
    Organization_Name: "",
    Contact_Person: "",
    Type_Clinic: false,
    Type_Practitioner: false,
    Type_Service_Bureau: false,
    Type_Hospital: false,
    Type_Vender: false,
    New_Data_Centre_Name: "",
    New_Data_Centre_Contact: "",
    Existing_Data_Centre_Name: "",
    Existing_Data_Centre_Number: "",
    Service_Bureau_Name: "",
    Service_Bureau_Number: "",
    Computer_Make_Model: "",
    Modem_Make_Model: "",
    Modem_Speed: "",
    Modem: false,
    Software_Name: "",
    Vender_Name: "",
    Supplier: "",
    Signature_Date: "",
    MSP_Payee_Number: "",
  });
  const [formPdfBytes, setFormPdfBytes] = useState(null);
  const [base64Data, setBase64Data] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setFormPdfBytes(e.target.result);
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const downloadPDF = (pdfBytes, filename) => {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const FillForm = async () => {
    if (formPdfBytes) {
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();

      // Update form fields based on the state
      try {
        const nameField = form.getTextField("Name");
        nameField.setText(formData.Name);

        const addressField = form.getTextField("Address");
        addressField.setText(formData.Address);

        const Type_Clinic = form.getCheckBox("Type_Clinic");
        if (formData.Type_Clinic) {
          Type_Clinic.check();
        } else {
          Type_Clinic.uncheck();
        }

        // Fill up other fields
        const cityField = form.getTextField("City");
        cityField.setText(formData.City);

        const postalCodeField = form.getTextField("Postal_Code");
        postalCodeField.setText(formData.Postal_Code);

        const phoneNumberField = form.getTextField("Phone_Number");
        phoneNumberField.setText(formData.Phone_Number);

        const organizationField = form.getTextField("Organization_Name");
        organizationField.setText(formData.Organization_Name);

        const contactPersonField = form.getTextField("Contact_Person");
        contactPersonField.setText(formData.Contact_Person);

        const Type_Practitioner = form.getCheckBox("Type_Practitioner");
        if (formData.Type_Practitioner) {
          Type_Practitioner.check();
        } else {
          Type_Practitioner.uncheck();
        }

        const Type_Service_Bureau = form.getCheckBox("Type_Service_Bureau");
        if (formData.Type_Service_Bureau) {
          Type_Service_Bureau.check();
        } else {
          Type_Service_Bureau.uncheck();
        }

        const Type_Hospital = form.getCheckBox("Type_Hospital");
        if (formData.Type_Hospital) {
          Type_Hospital.check();
        } else {
          Type_Hospital.uncheck();
        }

        const Type_Vender = form.getCheckBox("Type_Vender");
        if (formData.Type_Vender) {
          Type_Vender.check();
        } else {
          Type_Vender.uncheck();
        }

        const newDataCentreNameField = form.getTextField(
          "New_Data_Centre_Name"
        );
        newDataCentreNameField.setText(formData.New_Data_Centre_Name);

        const newDataCentreContactField = form.getTextField(
          "New_Data_Centre_Contact"
        );
        newDataCentreContactField.setText(formData.New_Data_Centre_Contact);

        const existingDataCentreNameField = form.getTextField(
          "Existing_Data_Centre_Name"
        );
        existingDataCentreNameField.setText(formData.Existing_Data_Centre_Name);

        const existingDataCentreNumberField = form.getTextField(
          "Existing_Data_Centre_Number"
        );
        existingDataCentreNumberField.setText(
          formData.Existing_Data_Centre_Number
        );

        const serviceBureauNameField = form.getTextField("Service_Bureau_Name");
        serviceBureauNameField.setText(formData.Service_Bureau_Name);

        const serviceBureauNumberField = form.getTextField(
          "Service_Bureau_Number"
        );
        serviceBureauNumberField.setText(formData.Service_Bureau_Number);

        const computerMakeModelField = form.getTextField("Computer_Make_Model");
        computerMakeModelField.setText(formData.Computer_Make_Model);

        const modemMakeModelField = form.getTextField("Modem_Make_Model");
        modemMakeModelField.setText(formData.Modem_Make_Model);

        const modemSpeedField = form.getTextField("Modem_Speed");
        modemSpeedField.setText(formData.Modem_Speed);

        const Modem = form.getCheckBox("Modem");
        if (formData.Modem) {
          Modem.check();
        } else {
          Modem.uncheck();
        }

        const softwareNameField = form.getTextField("Software_Name");
        softwareNameField.setText(formData.Software_Name);

        const venderNameField = form.getTextField("Vender_Name");
        venderNameField.setText(formData.Vender_Name);

        const supplierField = form.getTextField("Supplier");
        supplierField.setText(formData.Supplier);

        const signatureDateField = form.getTextField("Signature_Date");
        signatureDateField.setText(formData.Signature_Date);

        const mspPayeeNumberField = form.getTextField("MSP_Payee_Number");
        mspPayeeNumberField.setText(formData.MSP_Payee_Number);
      } catch (error) {
        console.error("Error updating fields:", error);
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const reader = new FileReader();

      reader.onloadend = () => {
        setBase64Data(reader.result);
      };

      reader.onerror = (error) => {
        console.error("Error reading PDF data:", error);
      };

      reader.readAsDataURL(blob);

      //   console.log(base64Data);
      //   downloadPDF(pdfBytes, "updated_pdf.pdf");
    } else {
      console.log("No file uploaded.");
    }
  };

  const getFields = async () => {
    if (formPdfBytes) {
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();
      for (const field of form.getFields()) {
        console.log(field.getName());
      }
    } else {
      console.log("No file uploaded.");
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {/* <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Agree to Terms:
          <input
            type="checkbox"
            checked={type_Clinic}
            onChange={(e) => setType_Clinic(e.target.checked)}
          />
        </label>
      </div> */}

      {/* {formPdfBytes &&  */}

      <button onClick={getFields}>Update and Download PDF</button>
      <div>Base64 PDF Data: {base64Data}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {formPdfBytes && (
            <div>
              <h2>Preview</h2>
              <iframe
                id="pdfIframe"
                title="PDF Preview"
                src={`data:application/pdf;base64,${btoa(
                  new Uint8Array(formPdfBytes).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                width="600"
                height="400"
              ></iframe>
            </div>
          )}

          {base64Data && (
            <div style={{ marginTop: "50px" }}>
              <h2>Updated</h2>
              <iframe
                src={base64Data}
                width="600"
                height="400"
                title="Preview"
              ></iframe>
            </div>
          )}
        </div>
        {formPdfBytes && (
          <From
            FillForm={FillForm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Check;
