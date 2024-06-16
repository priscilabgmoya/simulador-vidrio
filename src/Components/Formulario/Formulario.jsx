/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Label } from '@mui/icons-material';
import { Autocomplete, Box, Button, Grid,TextField, Typography  } from '@mui/material';
import { useFormik } from 'formik';
import { generatePorcentaje, schemaSimulacion, valueSimulacion } from '../../Helpers/helps';
import { SimuladorVidrio, webWorker, workerPersonas } from '../../../Simulador/SimuladorVidrio';
const inputGestionar = { width: "100%", backgroundColor: "white", m: 1 }
const form = {display:"flex", flexDirection:"column"}
const msgError = {color:"red", fontSize: 15,mt:1}

export default function NuevaSimulacion(props){

  
  const  {open, text, close,addValue, load} = props; 
  const onSubmit = async (values,{resetForm})=>{ 
     SimuladorVidrio(values,addValue); 
    // resetForm(); 
     load(); 
      }
      const formik = useFormik({
        initialValues: valueSimulacion,
        validationSchema: schemaSimulacion,
        onSubmit: onSubmit,
      });
       const closeModal = ()=>{
        formik.resetForm(); 
        close(); 
        localStorage.clear(); 
        workerPersonas.terminate(); 
        webWorker.terminate(); 
      }

webWorker.onmessage = async function(e){
        const {cdm, totales } = e.data; 
        if(cdm === 0){
             addValue(totales)
        }
    }
const {porcentajes} = generatePorcentaje(); 
    return(
<>
        <Box component={"form"} onSubmit={formik.handleSubmit} className="formLogin" sx={form} >
          <Grid   container  width={"100%"} spacing={1}>
          <Grid item  xs={6} >
            <Typography sx={{m:1}}>{`Ingrese los datos recolectados de ${text}:`} </Typography>
          <TextField
            type="number"
            role="inputDescripcionProvincia"
            name="cantidadPersonas"
            id="descripcionProvincia"
            label= "Cantidad de Personas"
            helperText="El minimo de personas es de 2000"
            min={0}
            onChange={formik.handleChange}
            value={formik.values.cantidadPersonas}
            sx={inputGestionar}
          />
          {formik.touched.cantidadPersonas && formik.errors.cantidadPersonas? <Box  sx={msgError}>{formik.errors.cantidadPersonas}</Box> : null}
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{m:1}}>Rango de Botella que recicla una Persona: </Typography>
            <Box  sx={{display:"flex" , gap:1}} >
            <Grid item xs={6}>
            <TextField
            type="number"
            role="inputDescripcionProvincia"
            name="normalA"
            id="descripcionProvincia"
            label= "Desde"
            onChange={formik.handleChange}
            value={formik.values.normalA}
            sx={inputGestionar}
          />
          {formik.touched.normalA && formik.errors.normalA? <Box  sx={msgError}>{formik.errors.normalA}</Box> : null}
            </Grid>
            <Grid item xs={6}>
            <TextField
            type="number"
            role="inputDescripcionProvincia"
            name="normalB"
            id="descripcionProvincia"
            label= "Hasta"
            onChange={formik.handleChange}
            value={formik.values.normalB}
            sx={inputGestionar}
          />
          {formik.touched.normalB && formik.errors.normalB? <Box  sx={msgError}>{formik.errors.normalB}</Box> : null}
            </Grid>
            </Box>
          </Grid>         
          <Grid item xs={6}  >

          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={porcentajes}
      sx={inputGestionar}
      getOptionLabel={(option) => option.porcentaje}
      value={porcentajes.find(p => { return p.porcentaje == ""+formik.values.porcentajeConsumoVidrio })|| null}
      onChange={(_, newValue) => newValue?.porcentaje ?  formik.setFieldValue('porcentajeConsumoVidrio', newValue?.porcentaje): formik.setFieldValue('porcentajeConsumoVidrio', "")}
      renderInput={(params) => <TextField {...params} type="number" label="Porcentaje de Personas que Comsumen Vidrio" />}
    />

          {formik.touched.porcentajeConsumoVidrio && formik.errors.porcentajeConsumoVidrio? <Box  sx={msgError}>{formik.errors.porcentajeConsumoVidrio}</Box> : null}
          </Grid>
          <Grid item xs={6}>
                    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={porcentajes}
      sx={inputGestionar}
      getOptionLabel={(option) => option.porcentaje}
      value={ porcentajes.find(p => { return p.porcentaje == ""+formik.values.porcentajePersonaReciclan })|| null}
      onChange={(_, newValue) => newValue?.porcentaje? formik.setFieldValue('porcentajePersonaReciclan', newValue?.porcentaje) : formik.setFieldValue('porcentajePersonaReciclan', "")}
      renderInput={(params) => <TextField {...params}  type="number" label="Porcentaje de Personas que Reciclan Vidrio" />}
    />
          {formik.touched.porcentajePersonaReciclan && formik.errors.porcentajePersonaReciclan? <Box  sx={msgError}>{formik.errors.porcentajePersonaReciclan}</Box> : null}
          </Grid>

        <Grid item xs={12}>
        <Box sx={{display: "flex", justifyContent:"center", alignItems:"center" , width:"100%"  }}>
          <Button   variant="contained" color="error" size="medium" onClick={closeModal}  sx={{m:1}}> Cancelar </Button>
           <Button    variant="contained"  type="submit" color="success"   size="medium"     sx={{m:1}}> Simular </Button>
        </Box>
        </Grid>
      </Grid>
        </Box>

</>
    );
}