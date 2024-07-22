import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./routes/BaseRoute";

function App() {
  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
