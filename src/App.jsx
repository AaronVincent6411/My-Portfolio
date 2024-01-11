import Home from "./pages/Home/Home";
import './App.css'
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Competencies from "./pages/Competencies/Competencies";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/competencies" element={<Competencies />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
            path="*"
            element={<PageNotFound />}
        />
      </Routes>
    </Router>
    );
}

export default App;
