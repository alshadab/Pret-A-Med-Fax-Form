import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./Component/Todo/Todo";
import PDF from "./Component/PDF";
import PDFViewer from "./Component/Todo/PdfFile";
import ViewPdf from "./Component/Todo/ViewPdf";
import PDFTronViewer from "./Component/Todo/PdfIo";
import PDfLib from "./Component/Todo/PDfLib";
import Check from "./Component/Todo/Check";
import Screen from "./Component/Screen";
import PdfDocument from "./Component/PdfDocument";

function App() {
  return (
    <div className="bo">
      <PdfDocument />
      {/* <Screen /> */}
      {/* <Check />  */}
      {/* <Todo /> */}
      {/* <PDF /> */}
      {/* <PDfLib /> */}
      {/* <PDFViewer /> */}
      {/* <ViewPdf /> */}
      {/* <PDFTronViewer /> */}
    </div>
  );
}
export default App;
