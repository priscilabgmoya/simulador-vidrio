/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import { IconButton, Tooltip, Typography  } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CloseIcon from '@mui/icons-material/Close';
import Grafic from "../Grafico/grafic";
import AlertSuccess from "../Alerts/AlertsSucces";
import AlertWarning from "../Alerts/AlertWarning";

export default function Resultados(props) {
const {data, close} = props
console.log(data);
const [paginate, setPaginate] = useState({
    pageSize: 14,
    page: 0,
  })
const handleChange = (e)=>{
    setPaginate(e); 
}
  const columns = [
    {
      field: "dia",
      headerName: "Día",
      width: 70,
    },
    {
      field: "cant_personas",
      headerName: "Cant. de Personas",
      width: 150,
    },
    {
      field: "cant_personas_vidrio",
      headerName: "Cant. de Personas que Consumen Vidrio",
      width: 220,
    },
    {
      field: "cant_personas_no_vidrio",
      headerName:  "Cant. de Personas que no Consumen Vidrio",
      width: 230,
    },
    {
      field: "cant_personas_reciclan",
      headerName: "Cant. de Personas que Reciclan",
      width: 150,
    },
    {
      field: "cant_personas_no_reciclan",
      headerName: "Cant. de Personas que no Reciclan ",
      width: 200,
    },
    {
      field: "cant_botellas",
      headerName: "Cant. de Botellas Recicladas",
      width: 150,
    },
    {
      field: "cant_vidrio_molido",
      headerName: "Cant. de Vidrio Molido",
      width: 150
    },
  ];
  
  const applyHeaderStyles = (headerName) => {
    if (headerName.length > 16) {
        return {
            whiteSpace: 'normal',
            wordWrap: 'break-word',
        };
    }
    return {};
};

// Mapear y aplicar estilos a las columnas según la longitud del texto de la cabecera
const updatedColumns = columns.map(column => ({
    ...column,
    headerName: (
        <div style={applyHeaderStyles(column.headerName)}>
            {column.headerName}
        </div>
    ),
}));
const [result, setResult] = useState(false); 
const seeResult =()=>{
  setResult(true); 
  setTimeout(() => {
    const element = document.getElementById("resultadoTabulados"); 
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
}, 500);
}
const closeResult =()=>{
  setResult(false); 
  setTimeout(() => {
    const element = document.getElementById("graficoSimulacion"); 
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
}, 500);
}
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        height: "100%",
      }}
      id="graficoSimulacion"
    >
 
   <Box >
  <Box sx={{display:"flex" , width:"100%" , justifyContent:"space-between"}} >
  <Typography
        variant="h4"
        sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
        fontWeight="bold"
        className="animate__animated animate__backInLeft"
      >
        {" "}
        {`Resultados de la Simulación:`}
        
      </Typography>
      <Tooltip title="Limpiar Simulación">
        <IconButton aria-label="delete" size="large" onClick={close } color="error" sx={{height: 40, m:1, width:45}} disabled={data?.resultados?.length !==14}>
        <CloseIcon/>
       </IconButton>
        </Tooltip>
<Tooltip title="Ver resultados Tabulados">
        <IconButton aria-label="delete" size="large" onClick={seeResult } sx={{height: 40, m:1, width:45}} disabled={data?.resultados?.length !==14}>
        <FindInPageIcon/>
       </IconButton>
        </Tooltip>
   
  </Box>
  
{
  data?.resultados?.length == 14 && data?.cant_total_baldosas > 1000 ?  <AlertSuccess data={data}/>   : null
}
{
  data?.resultados?.length == 14 && data?.cant_total_baldosas < 1000 ?  <AlertWarning data={data}/>   : null
}
<Grafic resultados= {data?.resultados} />

  </Box>  
{
      result && <Box sx={{ display:"flex" , width:"100%" , flexDirection:"column"}} id="resultadoTabulados" className="animate__animated animate__flipInX">
          <Box sx={{display:"flex" , width:"100%" , justifyContent:"space-between"}} >
   <Typography
  variant="h4"
  sx={{ mb: 1, mt: 1, textAlign: "center", width: "100%" }}
  fontWeight="bold"
>
  {" "}
  {`Resultados Tabulados`}
</Typography>
<Tooltip title="Cerrar Resultados Tabulados" className="closeTooltip">
        <IconButton aria-label="delete" size="large" onClick={closeResult } sx={{height: 40, m:1, width:45}}>
        <CloseIcon/>
       </IconButton>
        </Tooltip>
  </Box>
        <Box  sx={{ height: 840, width:  '100%' }}> 
        <DataGrid
          rows={data?.resultados}
          columns={updatedColumns}
          rowSelection={false}
          style={{backgroundColor:"white",borderRadius:10}}
          initialState={{
            ...data?.initialState,
            pagination: { paginationModel: { pageSize: 14 } },
            }}
            paginationModel={paginate}
            onPaginationModelChange={handleChange}
          pageSizeOptions={[5, 10, 25, 30,50 ]}
          loading={data?.resultados.length ==0}
        />

        </Box>
      </Box>
        
      }


    </Box>
  );
}