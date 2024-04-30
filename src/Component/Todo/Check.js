import React, { useRef, useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import From from "../From";
import file from "../teleplan.pdf";
import { Document, Page, pdfjs } from "react-pdf";

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
    Modem: "",
    Software_Name: "",
    Vender_Name: "",
    Supplier: "",
    Signature_Date: "",
    MSP_Payee_Number: "",
  });
  const [formPdfBytes, setFormPdfBytes] = useState(null);
  const [base64Data, setBase64Data] = useState("");

  // Client-side code

  const handleFileChange = async () => {
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          console.log(reader.result);
          setFormPdfBytes(reader.result);
        };
      });
  };
  // const handleFileFetch = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www2.gov.bc.ca/assets/gov/health/forms/2820fil.pdf"
  //     ); // Replace 'your-server-url' with the URL of your server and 'your-file.pdf' with the name of the file
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch file");
  //     }
  //     const blob = await response.blob();
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       setFormPdfBytes(e.target.result);
  //     };
  //     reader.readAsArrayBuffer(blob);
  //   } catch (error) {
  //     console.error("Error fetching file:", error);
  //   }
  // };

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
      console.log(form);

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
        console.log(Modem);
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

  //on ss

  const [pageDetails, setPageDetails] = useState(null);
  const documentRef = useRef(null);
  const [signatureURL, setSignatureURL] = useState(null);
  const [position, setPosition] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [pageNum, setPageNum] = useState(0);

  const styles = {
    container: {
      maxWidth: 900,
      margin: "0 auto",
    },
    sigBlock: {
      display: "inline-block",
      border: "1px solid #000",
    },
    documentBlock: {
      maxWidth: 800,
      margin: "20px auto",
      marginTop: 8,
      border: "1px solid #999",
    },
    controls: {
      maxWidth: 800,
      margin: "0 auto",
      marginTop: 8,
    },
  };

  function blobToURL(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  }

  const onSs = async () => {
    const { originalHeight, originalWidth } = pageDetails;
    const scale = originalWidth / documentRef.current.clientWidth;

    const y =
      documentRef.current.clientHeight -
      (position.y - position.offsetY + 64 - documentRef.current.offsetTop);
    const x =
      position.x - 160 - position.offsetX - documentRef.current.offsetLeft;

    // new XY in relation to actual document size
    const newY = (y * originalHeight) / documentRef.current.clientHeight;
    const newX = (x * originalWidth) / documentRef.current.clientWidth;

    const pdfDoc = await PDFDocument.load(pdf);

    const pages = pdfDoc.getPages();
    const firstPage = pages[pageNum];

    const pngImage = await pdfDoc.embedPng(signatureURL);
    const pngDims = pngImage.scale(scale * 0.3);

    firstPage.drawImage(pngImage, {
      x: newX,
      y: newY,
      width: pngDims.width,
      height: pngDims.height,
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([new Uint8Array(pdfBytes)]);

    const URL = await blobToURL(blob);
    setPdf(URL);
    setPosition(null);
    setSignatureURL(null);
  };

  const divRef = useRef(null);

  const handleExportToPDF = async () => {
    // Get dimensions of the div
    const div = divRef.current;
    const { offsetWidth, offsetHeight } = div;

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the PDF document
    const page = pdfDoc.addPage([offsetWidth, offsetHeight]);

    // Draw a rectangle on the page
    page.drawRectangle({
      x: 50,
      y: offsetHeight - 100,
      width: 200,
      height: 50,
      color: rgb(0.2, 0.5, 0.7),
    });

    // Add some text to the page
    page.drawText("Hello, this is a PDF!", {
      x: 100,
      y: offsetHeight - 80,
      size: 20,
      color: rgb(1, 0, 0),
    });

    // Get the PDF bytes
    const pdfBytes = await pdfDoc.save();

    // Create a blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a URL for the blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}
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

      <button onClick={getFields}>Get Fields</button>
      <button onClick={handleFileChange}>Open</button>
      <div>Base64 PDF Data: {base64Data}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <iframe src={file} width="100%" height="600px" /> */}
        <div>
          {formPdfBytes && (
            <div>
              <h2>Preview</h2>
              <iframe
                id="pdfIframe"
                title="PDF Preview"
                src={formPdfBytes}
                width="800"
                height="800"
              ></iframe>
            </div>
          )}

          {base64Data && (
            <div
              ref={divRef}
              style={{
                width: "500px",
                height: "700px",
                border: "1px solid black",
              }}
            >
              <h2>Updated</h2>
              <Document
                file={{ data: base64Data }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              {/* <iframe
                id="printablediv"
                src={base64Data}
                width="600"
                height="400"
                title="Preview"
              ></iframe> */}
              <button onClick={Print}>Take SS</button>
            </div>
          )}

          {pdf && (
            <div>
              <iframe src={pdf} width="600" height="400" title="PDF"></iframe>
            </div>
          )}
        </div>
        {formPdfBytes && (
          <From
            FillForm={FillForm}
            formData={formData}
            setFormData={setFormData}
            handleExportToPDF={handleExportToPDF}
            divRef={divRef}
          />
        )}
      </div>
    </div>
  );
};

export default Check;
