import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

async function mergePdfs(pdfFiles) {
  const mergedPdf = await PDFDocument.create();

  for (const pdfBuffer of pdfFiles) {
    const pdf = await PDFDocument.load(pdfBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfFile = await mergedPdf.save();
  return mergedPdfFile;
}

const PDF = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const buffers = await Promise.all(
      [...files].map((file) => file.arrayBuffer())
    );
    setPdfFiles(buffers);
  };

  const handleMerge = async () => {
    const mergedPdfBuffer = await mergePdfs(pdfFiles);
    const blob = new Blob([mergedPdfBuffer], { type: "application/pdf" });
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };

    reader.onerror = (error) => {
      console.error("Error reading PDF data:", error);
    };

    reader.readAsDataURL(blob);
  };

  // const handleDownload = async () => {
  //   const mergedPdfBuffer = await mergePdfs(pdfFiles);
  //   const blob = new Blob([mergedPdfBuffer], { type: "application/pdf" });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "merged.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleMerge}>Merge PDFs</button>
      {/* <button onClick={handleDownload}>Download Merged PDF</button> */}
      {previewUrl && (
        <div style={{ marginTop: "50px", width: "1200px" }}>
          <h2>Preview</h2>
          <iframe
            src={previewUrl}
            width="600"
            height="400"
            title="Preview"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PDF;
