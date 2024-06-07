import { Icon } from "leaflet";
import * as Yup from 'yup';
export const newIcon = () => {
    let nuevoIcon =  new Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      return nuevoIcon; 
}

export const schemaSimulacion = Yup.object().shape({
    cantidadPersonas: Yup.number()
      .min(1500, 'Debe haber al menos 1500 personas')
      .required('La cantidad de personas es obligatoria'),
    
    porcentajeConsumoVidrio: Yup.number()
      .min(0, 'El porcentaje de consumo de vidrio no puede ser menor que 0')
      .max(100, 'El porcentaje de consumo de vidrio no puede ser mayor que 100')
      .required('El porcentaje de consumo de vidrio es obligatorio'),
    
    porcentajePersonaReciclan: Yup.number()
      .min(0, 'El porcentaje de personas que reciclan no puede ser menor que 0')
      .max(100, 'El porcentaje de personas que reciclan no puede ser mayor que 100')
      .required('El porcentaje de personas que reciclan es obligatorio'),
    
    normalA: Yup.number()
    .min(1, 'Debe haber al menos una Botella incial')
      .required('El valor Desde es obligatorio'),
    
    normalB: Yup.number()
    .min(1, 'Debe haber al menos una Botella final')
      .required('El valor Hasta es obligatorio')
      .test(
        'is-greater',
        'Hasta debe ser mayor que Desde',
        function(value) {
          const { normalA } = this.parent;
          return value > normalA;
        }
      ),
  });

export const valueSimulacion = {
    cantidadPersonas:0, 
    porcentajeConsumoVidrio: "",
    porcentajePersonaReciclan: "",
    normalA:0,
    normalB:0, 
}

export function generarID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}