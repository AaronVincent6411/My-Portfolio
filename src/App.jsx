import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/1-Overview/Overview"
// import About from "./pages/2-About/About"
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const myStyle = {
    background: 'linear-gradient(to right, #632636, #392A48)',
    height: '100vh',
    width: '100vw'
  };

  return (
    <div style={myStyle}>
      <div>
        <Home/>
      </div>
    </div>
  )
}

export default App
