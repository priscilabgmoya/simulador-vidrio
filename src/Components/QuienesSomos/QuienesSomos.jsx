import FotoIan from "../../../public/7.jpg";
import FotoPri from "../../../public/8.jpg";
import FotoMile from "../../../public/9.jpg";
import FotoPau from "../../../public/10.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Grid, Typography } from "@mui/material";
import MediaCardEquipo from "./Card";
const equipo = [
  {
    img: FotoMile,
    description:
      "Milena es una Product Owner con visión estratégica y habilidades de gestión de productos excepcionales.Ella colabora estrechamente con los stakeholders para definir la visión del producto y priorizar el backlog. Milena lidera al equipo de desarrollo ágil para maximizar el valor entregado en cada sprint, asegurando que el producto final no solo cumpla, sino que supere las expectativas del cliente.",
    name: "Milena de los Angeles, Guitian",
    position: "Product Owner",
    links: [
      {
        icon: <LinkedInIcon />,
        red: "LinkedIn",
        link: "",
      },
      {
        icon: <GitHubIcon />,
        red: "GitHub",
        link: "",
      },
    ],
  },
  {
    img: FotoIan,
    description:
      "Ian es un Analista de Requerimientos apasionado por entender las necesidades del negocio. Utiliza su experiencia en entrevistas y análisis de datos para traducir los requisitos de los stakeholders en especificaciones claras y concisas para el equipo de desarrollo. Ian juega un papel fundamental en asegurar que cada proyecto comience con una comprensión sólida y precisa de lo que se espera lograr.",
    name: "Ian Ventzel, Ferjancic",
    position: "Business Analyst",
    links: [
      {
        icon: <LinkedInIcon />,
        red: "LinkedIn",
        link: "",
      },
      {
        icon: <GitHubIcon />,
        red: "GitHub",
        link: "",
      },
    ],
  },
  {
    img: FotoPri,
    description:
      "Priscila es una Desarrolladora apasionada por la programación y la resolución de problemas complejos. Con habilidades sólidas en múltiples lenguajes y frameworks, ella trabaja diligentemente para diseñar, escribir y probar código robusto y eficiente. Priscila colabora con el equipo para optimizar el rendimiento del software y garantizar que las soluciones técnicas se alineen con los requisitos del proyecto.",
    name: "Priscila Belen, Garcia Moya",
    position: "Developer",
    links: [
      {
        icon: <LinkedInIcon />,
        red: "LinkedIn",
        link: "https://www.linkedin.com/in/priscila-b-garcia-moya-750836197/",
      },
      {
        icon: <GitHubIcon />,
        red: "GitHub",
        link: "https://github.com/priscilabgmoya",
      },
    ],
  },
 
  {
    img: FotoPau,
    description:
      "Paula es una QA meticulosa y orientada a los detalles, comprometida con la calidad del software. Ella diseña y ejecuta casos de prueba exhaustivos, identificando y documentando cualquier defecto para asegurar que el producto final sea libre de errores. Paula trabaja estrechamente con desarrolladores y stakeholders para mantener altos estándares de calidad, garantizando que cada entrega cumpla con las expectativas del cliente.",
    name: "María Paula, Madrid",
    position: "QA (Quality Assurance)",
    links: [
      {
        icon: <LinkedInIcon />,
        red: "LinkedIn",
        link: "",
      },
      {
        icon: <GitHubIcon />,
        red: "GitHub",
        link: "",
      },
    ],
  },
];
export default function Equipo() {
  return (
    <Box id="quienesSomos" sx={{width:"100%"}}>
    <Typography variant="h3"  textAlign={"center"} sx={{mt:3}} className="animate__animated animate__backInLeft">¿Quiénes Somos? </Typography>
      <Typography className="animate__animated animate__backInLeft" sx={{mt:1}}>
        Cada uno de nosotros desempeñó un rol crucial en el ciclo de vida del
        desarrollo de este software, contribuyendo con nuestras habilidades y
        experiencia para garantizar productos de alta calidad que satisficieran
        las necesidades y expectativas del negocio y de los usuarios finales.
      </Typography>
      <Grid container width={"100%"} spacing={1} sx={{mt:1}}>
        {
            equipo.map((e,index)=>{
                return <Grid item xs={12} sm={3}  key={index}> 
                <MediaCardEquipo img={e.img} description={e.description} name={e.name} position={e.position} links={e.links} />
                </Grid>
            })
        }
      </Grid>
    </Box>
  );
}
