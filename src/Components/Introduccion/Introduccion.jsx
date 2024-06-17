import { Box, List, ListItem, Typography } from "@mui/material";
import Process from "./processRecicly";

export default function Introduccion() {
  return (
    <Box id="situacionProblematica">
      <Typography
        variant="h3"
        textAlign={"center"}
        className="animate__animated animate__backInLeft"
        sx={{mt:2}}
      >
        Situación Problematica
      </Typography>
      <Typography
        variant="body1"
        textAlign={"justify"}
        className="animate__animated animate__backInUp"
        sx={{mt:2}}
      >
        Actualmente, el manejo inadecuado de residuos sólidos, en particular el
        vidrio, representa un gran desafío ambiental y de sostenibilidad. El
        hecho de no reciclar ocasiona los siguientes problemas:
      </Typography>
      <Box sx={{ display: "flex", gap: 2, width: "100%", mb: 1, mt: 1 }}>
        <List>
          <ListItem className="animate__animated animate__rollIn">
            <Typography variant="body1" textAlign={"justify"}>
              1- La consecuencia de no reciclar el vidrio implica tener que
              producir el mismo, lo que genera emisión de gases durante el
              proceso, por ejemplo: el óxido de azufre y de nitrógeno, son unos
              de los gases que originan el daño en la capa de ozono.
            </Typography>
          </ListItem>
          <ListItem className="animate__animated animate__rollIn">
            <Typography variant="body1" textAlign={"justify"}>
              2- El vidrio es muy frágil, pero también muy resistente. Por eso
              la naturaleza necesita 40 siglos aproximadamente para
              descomponerse, lo que conlleva a un impacto negativo en el entorno
              natural y en la gestión global de los residuos sólidos.
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Typography
        variant="body1"
        textAlign={"justify"}
        className="animate__animated animate__backInUp"
        sx={{mt:2}}
      >
        En Argentina se producen más de 1.000.000 de toneladas de vidrio por
        año, y se recupera de ese volumen al menos un 0,5%. Los recolectores
        urbanos no quieren llevar el vidrio ya que su valor de mercado es
        muchísimo menor con respecto a otros materiales reciclables, pero el
        vidrio es el más “ecoamigable” de todos. Además, si bien este material
        es 100% reciclable, el precio que se paga por él es el más bajo del
        mercado, sumado al alto costo logístico que implica.
      </Typography>

      <Typography
        variant="h5"
        textAlign={"justify"}
        sx={{ mt: 2 }}
        className="animate__animated animate__backInUp"
        
      >
        ¿Quién es Nuestro Cliente?
      </Typography>
      <Typography
        variant="body1"
        textAlign={"justify"}
        className="animate__animated animate__backInUp"
        sx={{mt:2}}
      >
        Gustavo Chopitea el director de Reciqlo. Reciqlo es una empresa de
        tecnología y Economía Circular, que mejora la eficiencia de los procesos
        operativos y económicos del reciclado a través de la articulación de
        empresas, gobiernos y sectores sociales.
      </Typography>
      <Typography
        variant="h5"
        textAlign={"justify"}
        sx={{ mt: 2 }}
        className="animate__animated animate__backInUp"
        
      >
        ¿Cómo es el Proceso de Reciclado de Vidrio?
      </Typography>
      <Process/>
    </Box>
  );
}
