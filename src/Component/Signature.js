import React, { useRef, useState } from "react";
import DraggableSignature from "./DraggableSignature";
import { PDFDocument, rgb } from "pdf-lib";
const Signature = () => {
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

  return (
    <div ref={documentRef} style={styles.documentBlock}>
      <DraggableSignature
        url={signatureURL}
        onCancel={() => {
          setSignatureURL(null);
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
        }}
        onEnd={setPosition}
      />
    </div>
  );
};

export default Signature;
