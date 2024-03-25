import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import From from "../From";

const Check = () => {
  const [formPdfBytes, setFormPdfBytes] = useState(null);
  const [base64Data, setBase64Data] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type_Clinic, setType_Clinic] = useState(false);

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
        const nameField = form.getTextField("Name"); // Adjust field name as needed
        nameField.setText(name);
        const addressField = form.getTextField("Address"); // Adjust field name as needed
        addressField.setText(address);
        const Type_Clinic = form.getCheckBox("Type_Clinic"); // Replace "AgreeToTerms" with your actual PDF checkbox field name
        if (type_Clinic) {
          Type_Clinic.check();
        } else {
          Type_Clinic.uncheck();
        }
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

      {formPdfBytes && <From />}
      <button onClick={FillForm}>Update and Download PDF</button>
      <div>Base64 PDF Data: {base64Data}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
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
          <div>
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
    </div>
  );
};

export default Check;
