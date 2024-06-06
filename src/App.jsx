
import { Typography } from '@mui/material'
import './App.css'
import Introduccion from './Components/Introduccion/Introduccion'
import Mapa from './Components/Mapa/Mapa'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
    <NavBar>
        <Introduccion/>
        <Typography variant="h3"  textAlign={"center"}>Simulador de Reciclado de Reciqlo  </Typography>
        <Mapa/>
        <Footer/>
    </NavBar>
    </>
  )
}

export default App
