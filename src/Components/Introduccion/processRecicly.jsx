import { Box, List, ListItem, Typography,} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import people from "../../../public/89687006-personaje-de-dibujos-animados-del-hombre-caminando-y-llevando-la-caja-con-botellas-de-plástico-en-la.jpg"
import tacho from "../../../public/tacho.jpg"; 
import camion from "../../../public/vecteezy_garbage-truck-cartoon-clipart-colored-illustration_6458117-1.jpg";
import maquina from "../../../public/pngegg.png";
import vidrio from "../../../public/vidrio-molido.jpg"
import fabrica from "../../../public/factory.png"
export default function Process() {
  return (
      <Box sx={{width:"100%", display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
        <Box sx={{width:"100%"}}>
        <Typography >Durante 14 días: </Typography>
            <List>
                <ListItem>1-Recolectar las botellas de vidrio en nuestras casas y llevarlas a los contenedores de reciclaje.</ListItem>
                <ListItem>2-Transportar el vidrio recogido al Punto Vidrio más cercano.</ListItem>
            </List>
        <Box sx={{width:"100%", display:"flex" , alignItems:"center"}}>
        <Box sx={{width:"200px"}} className="animate__animated animate__backInLeft ">
            <Box src={people} alt="" component={"img"} sx={{width:"100%"}} />
        </Box>
        <Box  className="animate__animated animate__bounceInLeft"><ArrowForwardIcon  color={"primary"}/></Box>
        <Box className="animate__animated animate__bounceInLeft "><ArrowForwardIcon color={"primary"}/></Box>
        <Box className="animate__animated animate__bounceInLeft "><ArrowForwardIcon color={"primary"}/></Box>
        <Box sx={{width:"200px"}}>
            <Box src={tacho} alt="" component={"img"} sx={{width:"100%"}} />
        </Box>
        </Box>
        </Box>
        <Box sx={{width:"100%"}} className="animate__animated animate__backInDown">
            <Typography className="animate__animated animate__backInDown">Después de 14 días de Recolección: </Typography>
            <List className="animate__animated animate__backInDown ">
                <ListItem className="animate__animated animate__backInDown "> 3-Los empleados de Reciqlo retiran los vidrios depositados del Punto Vidrio.</ListItem>
                <ListItem className="animate__animated animate__backInDown "> 4-Los empleados llevan el vidrio recolectado a la casa principal de Reciqlo.</ListItem>
            </List>
        <Box sx={{width:"100%", display:"flex" , alignItems:"center"}}>
        <Box sx={{width:"200px"}} className="animate__animated animate__backInDown">
            <Box src={tacho} alt="" component={"img"} sx={{width:"100%"}} />
        </Box>
        <Box  className="animate__animated animate__backInDown"><ArrowForwardIcon  color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box sx={{width:"400px",}} className="animate__animated animate__backInDown">
            <Box src={camion} alt="" component={"img"} sx={{width:"100%", }} />
        </Box>
        <Box  className="animate__animated animate__backInDown"><ArrowForwardIcon  color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box sx={{width:"400px",}} className="animate__animated animate__backInDown">
            <Box src={fabrica} alt="" component={"img"} sx={{width:"100%", }} />
        </Box>
        </Box>
        </Box>
        <Box sx={{width:"100%"}} className="animate__animated animate__backInDown">
            <Typography className="animate__animated animate__backInDown">Una vez en Casa Central, Comienza la Trituración de las botellas de Vidrio: </Typography>
            <List className="animate__animated animate__backInDown ">
                <ListItem className="animate__animated animate__backInDown ">5-Los empleados de Reciqlo colocan los contenedor de botellas de vidrio  dentro de una maquina de trituración.</ListItem>
                <ListItem className="animate__animated animate__backInDown ">6-Al finalizar el proceso de trituración se obtiene vidrio molido.</ListItem>
            </List>
        <Box sx={{width:"100%", display:"flex" , alignItems:"center"}}>
        <Box sx={{width:"200px",}} className="animate__animated animate__backInDown">
            <Box src={tacho} alt="" component={"img"} sx={{width:"100%", }} />
        </Box>
        <Box  className="animate__animated animate__backInDown"><ArrowForwardIcon  color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box sx={{width:"400px"}} className="animate__animated animate__backInDown">
            <Box src={maquina} alt="" component={"img"} sx={{width:"100%"}} />
        </Box>
        <Box  className="animate__animated animate__backInDown"><ArrowForwardIcon  color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box className="animate__animated animate__backInDown "><ArrowForwardIcon color={"primary"}/></Box>
        <Box sx={{width:"400px"}} className="animate__animated animate__backInDown">
            <Box src={vidrio} alt="" component={"img"} sx={{width:"100%"}} />
        </Box>
        </Box>
        </Box>
      </Box>
  );
}
