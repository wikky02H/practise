import RootRouter from "./router/Root";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <RootRouter />
      </Router>
    </>
  );
}

export default App;
