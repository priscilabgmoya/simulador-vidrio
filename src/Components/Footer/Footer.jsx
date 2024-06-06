import { Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
const date = new Date(); 

  return (
    <footer>
      <Typography sx={{ textAlign: "center",verticalAlign:"middle", fontStyle:"italic"}}> <CopyrightIcon sx={{textAlign: "center", m:0 , p:0, fontSize:15, verticalAlign:"middle"}}/> {`${date.getFullYear()} - Vidrio Team` }</Typography>
    </footer>
  )
}

export default Footer