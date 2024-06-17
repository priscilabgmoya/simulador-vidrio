/* eslint-disable react/prop-types */
import { CircleMarker, MapContainer, TileLayer } from "react-leaflet";
import MarkerMap from "./Marker";
import { puntosVidrios } from "../../Helpers/PuntosVidrios";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Resultados from "../Table/Tabla";
import NuevaSimulacion from "../Formulario/Formulario";
import LoadData from "../LoadData/LoadData";
import { webWorker } from "../../../Simulador/SimuladorVidrio";

const redOptions = { color: 'red' }
export default function Mapa() {
const mapRef = useRef(null);
const [select, setSelect] = useState(""); 
const [simulator, setSimulator] = useState(false); 
const [data, setData] = useState({}); 
const [isLoading, setIsLoading] = useState(false); 
const [load, setLoad] = useState(false); 
const addSelect = (props) => {
    const {lat, lng, label} = props;
    const map = mapRef.current;
    if(map){
        map.setView([lat, lng], 15);
        setSimulator(true); 
        setSelect(label); 
    }
 setTimeout(() => {
      const element = document.getElementById("nuevaSimulacion"); 
      if(element){
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }, 500);
}; 
const generateLoad =()=>{
  setLoad(true);
}
const closeSimulador = () => {
    setSimulator(false); 
    setSelect("");
    setData({});  
    setIsLoading(false); 
    setLoad(false);
    const map = mapRef.current;
    if (map) {
      map.setView(["-34.47733729824062", "-58.57290783466175"], 12);
    }
    window.location.reload(); 
  }
  const addValue = (value) =>{
    console.log(value);
    setData({...value}); 
    setIsLoading(true); 
    setLoad(false); 
    if(data.resultados?.length === 14){
      webWorker.terminate(); 
    }
}
    return(
        <>
        <Typography variant="h3"  textAlign={"center"} className="animate__animated animate__backInLeft">Simulador de Reciclado de Reciqlo  </Typography>
        <Box sx={{width:"100%" ,display:"flex", flexDirection:"column"}} id="simulador" className="animate__animated  animate__fadeInLeftBig">
            <Box sx={  {width:"100%" }}>
        <MapContainer
        key={Date.now}
        center={{ lat: "-34.47733729824062", lng: "-58.57290783466175" }}
        zoom={12}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        {
          puntosVidrios?.map((punto, index) => {
              return punto.label === select ?
            <CircleMarker key={index} center={[punto.lat, punto.lng]} pathOptions={redOptions} radius={100}>
            <MarkerMap 
                lat={punto.lat}
                lng={punto.lng}
                label={punto.label}
                addSelect = {addSelect}
              />
            </CircleMarker>: 
              <MarkerMap
                key={index}
                lat={punto.lat}
                lng={punto.lng}
                label={punto.label}
                addSelect = {addSelect}
              />
          })
        }
      </MapContainer>
     
            </Box>
        <Box id="nuevaSimulacion" sx={simulator ? {minHeight:200} : {minHeight:0} }>

        {
        simulator&& <NuevaSimulacion close={closeSimulador} addValue={addValue} text={select} load={generateLoad}/>
      }
        </Box>

        
        </Box>
        {
            isLoading ? <Resultados data={data}/>: null
        }
        {
            load ? <LoadData/>: null 
        }
        </>
    );
}