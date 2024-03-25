//

import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const PDfLib = () => {
  const [formPdfBytes, setFormPdfBytes] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      setFormPdfBytes(reader.result);
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const downloadPDF = (blob, filename) => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //   const FillForm = async () => {
  //     if (formPdfBytes) {
  //       const pdfDoc = await PDFDocument.load(formPdfBytes, {
  //         updateMetadata: false,
  //       });
  //       const form = pdfDoc.getForm();

  //       console.log("Title:", pdfDoc.getTitle());
  //       console.log("Author:", pdfDoc.getAuthor());
  //       console.log("Subject:", pdfDoc.getSubject());
  //       console.log("Creator:", pdfDoc.getCreator());
  //       console.log("Keywords:", pdfDoc.getKeywords());
  //       console.log("Producer:", pdfDoc.getProducer());
  //       console.log("Creation Date:", pdfDoc.getCreationDate());
  //       console.log("Modification Date:", pdfDoc.getModificationDate());
  //     }
  //     //   const form = pdfDoc.getForm();
  //     //   const fields = form.getFields();
  //     //   for (const [fieldName, field] of Object.entries(fields)) {
  //     //     console.log(fieldName, field);
  //     //   }
  //     //   const pdfBytes = await pdfDoc.save();

  //     // Trigger the browser to download the PDF document
  //     //   downloadPDF(
  //     //     pdfBytes,
  //     //     "pdf-lib_form_creation_example.pdf",
  //     //     "application/pdf"
  //     //   );
  //     else {
  //       console.log("No file uploaded.");
  //     }
  //   };

  //   const FillForm = async () => {
  //     if (formPdfBytes) {
  //       const pdfDoc = await PDFDocument.load(formPdfBytes, {
  //         updateMetadata: false,
  //       });
  //       const form = pdfDoc.getForm();

  //       console.log("Title:", pdfDoc.getTitle());
  //       console.log("Author:", pdfDoc.getAuthor());
  //       console.log("Subject:", pdfDoc.getSubject());
  //       console.log("Creator:", pdfDoc.getCreator());
  //       console.log("Keywords:", pdfDoc.getKeywords());
  //       console.log("Producer:", pdfDoc.getProducer());
  //       console.log("Creation Date:", pdfDoc.getCreationDate());
  //       console.log("Modification Date:", pdfDoc.getModificationDate());

  //       const fields = form.getFields();
  //       console.log("Form Fields:");
  //       for (const [fieldName, field] of Object.entries(fields)) {
  //         console.log("Field Name:", fieldName);
  //         console.log("Field Value:", field.getValue());
  //         console.log("Field Type:", field.constructor.name);
  //       }
  //     } else {
  //       console.log("No file uploaded.");
  //     }
  //   };

  //   const FillForm = async () => {
  //     if (formPdfBytes) {
  //       const pdfDoc = await PDFDocument.load(formPdfBytes, {
  //         updateMetadata: false,
  //       });
  //       const form = pdfDoc.getForm();

  //       // Existing metadata logs
  //       console.log("Title:", pdfDoc.getTitle());
  //       // Other metadata logs...

  //       const fields = form.getFields();
  //       console.log("Form Fields:");
  //       fields.forEach((field) => {
  //         console.log("Field Name:", field.getName());
  //         // If you need to check the type, you can log the type like this
  //         console.log("Field Type:", field.constructor.name);
  //         // If you're curious about the current value (for writable fields):
  //         console.log("Field Value:", field.getValue());
  //       });
  //     } else {
  //       console.log("No file uploaded.");
  //     }
  //   };

  const FillForm = async () => {
    if (formPdfBytes) {
      const pdfDoc = await PDFDocument.load(formPdfBytes, {
        updateMetadata: false,
      });
      const form = pdfDoc.getForm();

      //   console.log("Title:", pdfDoc.getTitle());
      //   // Other metadata logs...

      //   const fields = form.getFields();
      //   //   console.log("Form Fields:");
      //   //   fields.forEach((field) => {
      //   //     const fieldName = field.getName();
      //   //     // fieldName?.setText("Mario");
      //   //     console.log("Field Name:", fieldName);
      //   //     const fieldType = field.constructor.name;
      //   //     console.log("Field Type:", fieldType);

      //   //     // Handling field value based on type
      //   //     if (
      //   //       fieldType === "PDFTextField" ||
      //   //       fieldType === "PDFDropdown" ||
      //   //       fieldType === "PDFOptionList"
      //   //     ) {
      //   //       console.log("Field Value:", field.getText());
      //   //     } else if (fieldType === "PDFCheckBox") {
      //   //       console.log(
      //   //         "Field Value:",
      //   //         field.isChecked() ? "Checked" : "Not Checked"
      //   //       );
      //   //     } else if (fieldType === "PDFRadioButton") {
      //   //       console.log("Field Value:", field.getSelectedOptions());
      //   //     } else {
      //   //       console.log(
      //   //         "Field Value: Special field type, may not have a direct value"
      //   //       );
      //   //     }
      //   //   });

      //   fields.forEach((field) => {
      //     console.log(
      //       `Field Name: ${field.getName()}, Field Type: ${
      //         field.constructor.name
      //       }`
      //     );
      //     const printButton = form.getButton("Print");
      //     console.log("Button", printButton);
      //     // This will help in identifying fields that are buttons.
      //   });

      //   const nameField = form.getTextField("Address");
      //   nameField.setText("Mario");

      const pdfBytes = await pdfDoc.save();

      // Trigger the browser to download the PDF document
      downloadPDF(
        pdfBytes,
        "pdf-lib_form_creation_example.pdf",
        "application/pdf"
      );
    } else {
      console.log("No file uploaded.");
    }
  };
  //   const printPdf = () => {
  //     const iframe = document.getElementById("pdfIframe"); // Ensure your PDF is displayed in an iframe with this ID
  //     iframe.contentWindow.print();
  //   };

  // Call printPdf() to simulate clicking the print button

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={FillForm}>Get Form</button>
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
            style={{ width: "100%", height: "500px" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PDfLib;

// import React, { useState } from "react";
// import pdfjs from "pdfjs-dist/legacy/build/pdf";

// const PDfLib = () => {
//   const [formPdfBytes, setFormPdfBytes] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function () {
//       setFormPdfBytes(reader.result);
//     };

//     if (file) {
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const downloadPDF = (blob, filename) => {
//     const url = window.URL.createObjectURL(new Blob([blob]));
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const fillFormWithData = async () => {
//     if (formPdfBytes) {
//       const pdfData = new Uint8Array(formPdfBytes);
//       const pdf = await pdfjs.getDocument({ data: pdfData }).promise;

//       // Access form fields and their values
//       const form = await pdf.getForm();

//       // For demonstration purposes, let's log the field values when the button is clicked
//       const fields = form.getFields();
//       for (const [fieldName, field] of Object.entries(fields)) {
//         console.log(fieldName, field.value);
//       }
//     } else {
//       console.log("No file uploaded.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       <button onClick={fillFormWithData}>
//         Fill Form with Data and Download
//       </button>
//     </div>
//   );
// };

// export default PDfLib;

// import React, { useState } from "react";
// import pdfjsLib from "pdfjs-dist";

// const PDFjsFormFields = () => {
//   const [formFields, setFormFields] = useState([]);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = async function () {
//       const arrayBuffer = this.result;
//       const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

//       const numPages = pdf.numPages;
//       let fields = [];

//       for (let i = 1; i <= numPages; i++) {
//         const page = await pdf.getPage(i);
//         const annotations = await page.getAnnotations();
//         console.log(annotations);

//         annotations.forEach((annotation) => {
//           if (annotation.fieldName) {
//             fields.push({
//               name: annotation.fieldName,
//               value: annotation.fieldValue,
//               type: annotation.fieldType,
//             });
//           }
//         });
//       }

//       setFormFields(fields);
//       console.log(fields);
//     };

//     if (file) {
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       {formFields.length > 0 && (
//         <div>
//           <h2>Form Fields</h2>
//           <ul>
//             {formFields.map((field, index) => (
//               <li key={index}>
//                 Name: {field.name}, Value: {field.value}, Type: {field.type}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PDFjsFormFields;
