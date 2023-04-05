import OverviewPage from "./pages/1-Overview/Overview"
import About from "./pages/2-About/About"
// import Timeline from "./pages/4-Timeline/Timeline"
// import Projects from "./pages/3-Projects/Projects"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const myStyle = {
    background: 'linear-gradient(to right, #632636, #392A48)',
    height: '100vh',
    width: '100vw'
  };

  return (
    <div style={myStyle}>
      <div>
        <OverviewPage/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        {/* <Projects/> */}
      </div>
      <div>
        {/* <Timeline/> */}
      </div>
      <div>
        {/* <Contact/> */}
      </div>
    </div>
  )
}

export default App;
