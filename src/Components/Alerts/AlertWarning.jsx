/* eslint-disable react/prop-types */
import {
  Alert,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export default function AlertWarning(props) {
  const { data } = props;
  return (
    <Alert variant="filled" severity="warning"  className="animate__animated animate__flipInY">
      <Typography
        sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
        fontWeight="bold"
      >
        {" "}
        {`Después de 14 días de operación en nuestro Punto Vidrio, hemos obtenido los siguientes resultados:`}
      </Typography>

      <List>
        <ListItemButton>
          <ListItemText
            primary={`- Cantidad de Botellas Recolectada: ${data?.cant_total_botellas}`}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary={`- Cantidad Total de Baldosas: ${data?.cant_total_baldosas}`}
          />
        </ListItemButton>
      </List>
      <Typography
        sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
        fontWeight="bold"
      >
        {" "}
        {`Evaluación de la Rentabilidad: Necesitamos más esfuerzos de reciclaje`}
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Aunque hemos hecho un gran esfuerzo, necesitamos incrementar nuestros
        esfuerzos de reciclaje para alcanzar nuestras metas de producción. El
        reciclaje de vidrio es crucial porque el proceso de fabricación de
        vidrio nuevo es sumamente tóxico y dañino para el medio ambiente.
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Además, el vidrio incorrectamente reciclado puede causar aún más daño
        debido a su largo periodo de deterioro.Para asegurar que más personas se
        unan a esta causa y podamos alcanzar un impacto aún mayor, invertiremos
        en campañas de concientización sobre la importancia del reciclaje del
        vidrio. Estas campañas estarán dirigidas a educar a la comunidad sobre
        los beneficios del reciclaje y cómo pueden participar activamente.
      </Typography>
      <Typography variant="body1" textAlign={"justify"} fontWeight="bold">
       Juntos, podemos hacer la diferencia y proteger nuestro planeta.
      </Typography>
    </Alert>
  );
}
