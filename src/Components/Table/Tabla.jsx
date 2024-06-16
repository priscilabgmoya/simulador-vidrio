/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import { Typography  } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export default function Resultados(props) {
const {data} = props
console.log(data);
const [paginate, setPaginate] = useState({
    pageSize: 10,
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
      width: 130,
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
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 1, mt: 1, textAlign: "center", width: "100%" }}
        fontWeight="bold"
      >
        {" "}
        {`Resultados de la Simulación`}
      </Typography>
      <Box sx={{ height: 425, width:  '100%' }}>
        <DataGrid
          rows={data?.resultados}
          columns={columns}
          rowSelection={false}
          style={{backgroundColor:"white",borderRadius:10}}
          initialState={{
            ...data?.initialState,
            pagination: { paginationModel: { pageSize: 10 } },
            }}
            paginationModel={paginate}
            onPaginationModelChange={handleChange}
          pageSizeOptions={[5, 10, 25, 30,50 ]}
          loading={data?.resultados.length ==0}
        />
      </Box>
{
  data?.resultados?.length == 14 ?       <Typography
  variant="h5"
  sx={{ mb: 1, mt: 1, textAlign: "center", width: "100%" }}
  fontWeight="bold"
>
  {" "}
  {`Cant. Total de Botellas Recolectada en 14 días: ${data?.cant_total_botellas} - Cant. Total de Baldosas: ${data?.cant_total_baldosas}`}
</Typography>: null
}

    </Box>
  );
}