/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import { routes } from "./Helpers/headers.jsx";
function App() {


  return (
    <NavBar>
      <Routes>
        {
          routes.map((r, index)=>{
            return <Route key={index} path={`${r.path}`} element={r.element} />
          })
        }
      </Routes>
    </NavBar>
  )
}

export default App
