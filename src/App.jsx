import './App.css'
import Introduccion from './Components/Introduccion/Introduccion'
import Mapa from './Components/Mapa/Mapa'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Equipo from './Components/QuienesSomos/QuienesSomos'

function App() {


  return (
    <>
    <NavBar>
        <Introduccion/>
        <Mapa/>
        <Equipo/>
        <Footer/>
    </NavBar>
    </>
  )
}

export default App
