/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardHeader, Link } from '@mui/material';

export default function MediaCardEquipo(props) {

    const {img, description, name, position, links} = props; 
  return (
    <Card sx={{ width: '100%', backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} className="animate__animated animate__rollIn">
           <CardHeader
        avatar={
          <Avatar  src={img} aria-label="recipe">
          </Avatar>
        }
        title={`${name}`}
        subheader={`Puesto: ${position}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{height:250, overflowY:"auto"  }} textAlign={"justify"}>
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        {
            links?.map((l, index) =>{
                return <Button key={index} href={`${l.link}`} type="button" component="a" startIcon={l.icon}>{l.red} </Button>
            })
        }
      </CardActions>
    </Card>
  );
}
