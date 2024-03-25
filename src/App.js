import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./Component/Todo/Todo";
import PDF from "./Component/PDF";
import PDFViewer from "./Component/Todo/PdfFile";
import ViewPdf from "./Component/Todo/ViewPdf";
import PDFTronViewer from "./Component/Todo/PdfIo";
import PDfLib from "./Component/Todo/PDfLib";
import Check from "./Component/Todo/Check";

function App() {
  return (
    <div className="bo">
      <Check />
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
