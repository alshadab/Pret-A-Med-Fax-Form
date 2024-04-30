import React from "react";

const Screen = () => {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <div>
      <div id="printablediv">
        <h1>Hello World</h1>
      </div>
      <button onClick={Print}>Print</button>
    </div>
  );
};

export default Screen;
