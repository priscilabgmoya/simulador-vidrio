/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Height } from "@mui/icons-material";
import { Box, useTheme,useMediaQuery, Typography, Divider } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from '@mui/x-charts/ChartsAxis';


export default function Grafic(props){
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  
    const chartWidth = isXs ? 300 : isSm ? 600 : isMd ? 800 : isLg ? 1000 : 1000;
    const chartHeight = isXs ? 200 : isSm ? 600 : isMd ? 400 : isLg ? 450 : 500;
    const chartSetting = {
        yAxis: [
          {
            label: 'Personas ',
          },
        ],
        width: chartWidth,
        height:chartHeight,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
          m:1
        },
      };
    let {resultados} = props;
    let dataSetPersonas = resultados?.map(r=>{
        const {id,  ...restData} = r; 
        return restData; 
    }); 
    const chartSettingVidrio = {
        yAxis: [
          {
            label: 'Vidrio ',
          },
        ],
        width: chartWidth,
        height:chartHeight,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
          m:1
        },
      };
    return <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
      <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="animate__animated animate__fadeInTopLeft">
<Typography
  variant="h6"
  sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
  fontWeight="bold"
>
  {" "}
  {`- Gráfico de Personas que Consumen y no Consumen Vidrio:`}
</Typography>
    <BarChart 
    dataset={dataSetPersonas}
    xAxis={[{ scaleType: 'band', dataKey: 'dia',label:"Días" }]}
    series={[
      { dataKey: 'cant_personas', label: 'Cant. Personas', color:"#77996e" }, 
      { dataKey: 'cant_personas_vidrio', label: 'Cant. Pers. que Consumen Vidrio', color:"#d3b8ae"},
      { dataKey: 'cant_personas_no_vidrio', label: 'Cant. Pers. que Consumen No Vidrio', color:"#aec6cf"},

    ]}
    {...chartSetting}
  />
      </Box>
  <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="animate__animated animate__fadeInTopLeft">
<Typography
  variant="h6"
  sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
  fontWeight="bold"
>
  {" "}
  {`- Gráfico de Personas que Reciclan y no Reciclan:`}
</Typography>
      <BarChart 
    dataset={dataSetPersonas}
    xAxis={[{ scaleType: 'band', dataKey: 'dia',label:"Días" }]}
    series={[
      { dataKey: 'cant_personas_reciclan', label: 'Cant. Pers. que Reciclan' ,color:"#77dd77"},
      { dataKey: 'cant_personas_no_reciclan', label: 'Cant. Pers. que No Reciclan', color:"#ffd966"},

    ]}
    {...chartSetting}
  />
  </Box>
<Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="animate__animated animate__fadeInTopLeft">
<Typography
  variant="h6"
  sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
  fontWeight="bold"
>
  {" "}
  {`- Gráfico de Botellas de Vidrio Obtenidas y Vidrio Molido obtenido:`}
</Typography>
      <BarChart 
    dataset={dataSetPersonas}
    xAxis={[{ scaleType: 'band', dataKey: 'dia',label:"Días" }]}
    series={[
      { dataKey: 'cant_botellas', label: 'Cantidad de Botellas Recicladas' , color:"#c8a2c8"},
      { dataKey: 'cant_vidrio_molido', label: 'Cantidad de Vidrio Molido (Kg)', color:"#f8b88b"},

    ]}
    {...chartSettingVidrio}
  />
  </Box>
    </Box>     
}