/* eslint-disable react/prop-types */
import {
  Alert,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export default function AlertSuccess(props) {
  const { data } = props;
  return (
    <Alert variant="filled" severity="success" className="animate__animated animate__flipInY">
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
        {`Evaluación de la Rentabilidad: ¡Éxito!`}
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Gracias a los esfuerzos de reciclaje de la comunidad, hemos recolectado
        una cantidad significativa de vidrio. Este logro no solo representa un
        avance en nuestra producción, sino que también contribuye
        significativamente a la reducción de residuos y a la protección del
        medio ambiente. Reciclar vidrio es crucial porque el proceso de
        fabricación de vidrio nuevo es sumamente tóxico y dañino para el medio
        ambiente.
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Además, el vidrio incorrectamente reciclado puede causar aún más daño
        debido a su largo periodo de deterioro. Al reciclar, no solo estamos
        conservando recursos naturales, sino también reduciendo la contaminación
        y los residuos. Queremos agradecer a cada persona que participó en este
        esfuerzo colectivo. Cada botella de vidrio reciclada es un paso hacia un
        futuro más sostenible y limpio para todos. Este éxito demuestra el poder
        de la acción comunitaria y la importancia de trabajar juntos por un
        objetivo común. 
      </Typography>
      <Typography variant="body1" textAlign={"justify"} fontWeight="bold">
        ¡Sigamos trabajando juntos para un futuro más sostenible!
      </Typography>
      <Typography
        sx={{ mb: 1, mt: 1, textAlign: "start", width: "100%" }}
        fontWeight="bold"
      >
        {" "}
        {`Próximos Pasos`}
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Para mantener y superar estos resultados, continuaremos promoviendo la
        importancia del reciclaje de vidrio y facilitando el acceso a los Puntos
        Vidrio. Invitamos a todos a seguir participando activamente en nuestras
        iniciativas de reciclaje y a compartir esta misión con familiares y
        amigos. El reciclaje de vidrio es una responsabilidad compartida, y
        juntos podemos hacer una gran diferencia para nuestro planeta.
      </Typography>
    </Alert>
  );
}
