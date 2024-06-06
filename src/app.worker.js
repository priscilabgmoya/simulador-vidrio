//worker.js

import { SimuladorVidrio } from "../Simulador/SimuladorVidrio";

export default ()=>{
    this.addEventListener("message", async (e)=>{
        if(!e) return; 
        alert("Estoy recibiendo");
        let {values} = e.data; 
        const {totales} = await SimuladorVidrio(values); 
        console.log(values);
        this.postMessage({totales})
    })
}