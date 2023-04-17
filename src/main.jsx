import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './pages/2-About/About'
import Projects from './pages/3-Projects/Projects'
import Competencies from './pages/4-Competencies/Competencies'
import Contact from './pages/5-Contact/Contact'
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import Achievements from './components/Achievements/Achievements'
import Certifications from './components/Certifications/Certifications'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/competencies",
    element: <Competencies/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/achievements",
    element: <Achievements/>,
  },
  {
    path: "/certifications",
    element: <Certifications/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)