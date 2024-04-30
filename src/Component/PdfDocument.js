import React, { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, rgb } from "pdf-lib";
import DraggableSignature from "./DraggableSignature";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfPreview = () => {
  const [pdfBase64, setPdfBase64] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(0);
  const [position, setPosition] = useState(null);
  const [base64Image, setBase64Image] = useState("");

  //   const onFileChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const base64String = e.target.result.split(",")[1];
  //         setPdfBase64(base64String);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      setBase64Image(base64String);
    };

    reader.readAsDataURL(file);
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

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64String = await blobToURL(file);
      setPdfBase64(base64String);
    }
  };

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
  const documentRef = useRef(null);
  const [pageDetails, setPageDetails] = useState(null);

  const check = (checkFile) => {
    console.log(checkFile);
    const { originalHeight, originalWidth } = pageDetails;
    console.log(originalHeight, originalWidth);
  };

  console.log(pdfBase64);
  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <input type="file" accept="image/*" onChange={handleImageInputChange} />
      {/* <button
        onClick={async () => {
          const { originalHeight, originalWidth } = pageDetails;
          const scale = originalWidth / documentRef.current.clientWidth;

          const y =
            documentRef.current.clientHeight -
            (position.y -
              position.offsetY +
              64 -
              documentRef.current.offsetTop);
          const x =
            position.x -
            160 -
            position.offsetX -
            documentRef.current.offsetLeft;

          // new XY in relation to actual document size
          const newY = (y * originalHeight) / documentRef.current.clientHeight;
          const newX = (x * originalWidth) / documentRef.current.clientWidth;

          const pdfDoc = await PDFDocument.load(pdfBase64);

          const pages = pdfDoc.getPages();
          const firstPage = pages[pageNum];

          const pngImage = await pdfDoc.embedPng(base64Image);
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
          setPdfBase64(URL);
        }}
      >
        Take SS
      </button> */}
      {pdfBase64 && (
        <div ref={documentRef} style={styles.documentBlock}>
          {base64Image ? (
            <DraggableSignature
              url={base64Image}
              onCancel={() => {
                setBase64Image(null);
              }}
              onSet={async () => {
                const { originalHeight, originalWidth } = pageDetails;
                const scale = originalWidth / documentRef.current.clientWidth;

                const y =
                  documentRef.current.clientHeight -
                  (position.y -
                    position.offsetY +
                    64 -
                    documentRef.current.offsetTop);
                const x =
                  position.x -
                  160 -
                  position.offsetX -
                  documentRef.current.offsetLeft;

                // new XY in relation to actual document size
                const newY =
                  (y * originalHeight) / documentRef.current.clientHeight;
                const newX =
                  (x * originalWidth) / documentRef.current.clientWidth;

                const pdfDoc = await PDFDocument.load(pdfBase64);

                const pages = pdfDoc.getPages();
                const firstPage = pages[pageNum];

                const pngImage = await pdfDoc.embedPng(base64Image);
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
                setPdfBase64(URL);
                setPosition(null);
                setBase64Image(null);
              }}
              onEnd={setPosition}
            />
          ) : null}
          <Document
            file={pdfBase64}
            onLoadSuccess={(data) => {
              setNumPages(data.numPages);
            }}
          >
            <Page
              width={800}
              height={1200}
              pageNumber={pageNum + 1}
              onLoadSuccess={(data) => {
                setPageDetails(data);
              }}
            />
          </Document>
        </div>
      )}
      {/* 
      {pdfBase64 && (
        <div style={{ marginTop: "50px", width: "1200px" }}>
          <h2>Preview</h2>
          <iframe
            src={pdfBase64}
            width="600"
            height="400"
            title="Preview"
          ></iframe>
        </div>
      )} */}
      <button onClick={() => check(documentRef.current.clientWidth)}>
        Check Ref
      </button>
    </div>
  );
};

export default PdfPreview;
