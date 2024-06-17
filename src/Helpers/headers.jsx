import GroupsIcon from '@mui/icons-material/Groups';
import TerminalIcon from '@mui/icons-material/Terminal';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Introduccion from '../Components/Introduccion/Introduccion'
import Mapa from '../Components/Mapa/Mapa'
import Equipo from '../Components/QuienesSomos/QuienesSomos'
const navItems = [
    {
        label: 'Situación Problematica',
        ref: "/",
        icon: <RecyclingIcon/>
    },
    {
        label: "Simulador",
        ref: "/simulador",
        icon:<TerminalIcon/>
    },
    {
        label: '¿Quiénes Somos?',
        ref: "/quienesSomos",
        icon: <GroupsIcon/>
    }
];

export const routes = [
    {
      path: "/",
      element: <Introduccion/>,
    },
    {
      path:"/simulador",
      element: <Mapa/>
    },
    {
      path:"/quienesSomos",
      element: <Equipo/>
    }
  ]

export {
    navItems
}