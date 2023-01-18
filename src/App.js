import { BrowserRouter } from "react-router-dom";
import MainView from "./pages/MainView";
import "./theme/theme.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </div>
  );
}

export default App;
