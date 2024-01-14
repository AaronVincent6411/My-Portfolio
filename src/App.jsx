import Home from "./pages/Home/Home";
import './App.css'
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
    );
}

export default App;
