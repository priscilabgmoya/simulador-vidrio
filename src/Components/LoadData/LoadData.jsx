import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/system';
export default function LoadData (){
    return(
   <Box sx={{display: "flex", width: "100%", flexDirection: "column" ,justifyContent:"center" , alignItems:"center", height:"100%",}}>
      <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} >
      Cargando Información
    </LoadingButton>
    </Box> 
    );
}