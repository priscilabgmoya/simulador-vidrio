import { Box, Typography } from "@mui/material";

export default function Introduccion() {
  return (
    <Box id="situacionProblematica">
      <Typography variant="h3"  textAlign={"center"}>Situación Problematica</Typography>
      <Typography variant="body1"  textAlign={"justify"}>
        Actualmente, el manejo inadecuado de residuos sólidos, en particular el
        vidrio, representa un gran desafío ambiental y de sostenibilidad. El
        hecho de no reciclar ocasiona los siguientes problemas:
      </Typography>
      <Box sx={{display:"flex" , gap:2 , width:"100%" , mb: 1, mt:1}}>
      <Typography variant="body1"  textAlign={"justify"} sx={{width:"50%"}}>
        1- La consecuencia de no reciclar el vidrio implica tener que producir el
        mismo, lo que genera emisión de gases durante el proceso, por ejemplo:
        el óxido de azufre y de nitrógeno, son unos de los gases que originan el
        daño en la capa de ozono.
      </Typography>
      <Typography variant="body1"  textAlign={"justify"} sx={{width:"50%"}}>
        2- El vidrio es muy frágil, pero también muy resistente. Por eso la
        naturaleza necesita 40 siglos aproximadamente para descomponerse, lo que
        conlleva a un impacto negativo en el entorno natural y en la gestión
        global de los residuos sólidos.
      </Typography>
      </Box>
      <Typography variant="body1" textAlign={"justify"}>
        En Argentina se producen más de 1.000.000 de toneladas de vidrio por
        año, y se recupera de ese volumen al menos un 0,5%. Los recolectores
        urbanos no quieren llevar el vidrio ya que su valor de mercado es
        muchísimo menor con respecto a otros materiales reciclables, pero el
        vidrio es el más “ecoamigable” de todos. Además, si bien este material
        es 100% reciclable, el precio que se paga por él es el más bajo del
        mercado, sumado al alto costo logístico que implica.
      </Typography>
    </Box>
  );
}
