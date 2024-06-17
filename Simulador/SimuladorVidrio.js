/* eslint-disable no-unused-vars */
import { diaRecoleccion } from "./helps";

export const webWorker = new Worker("../Worker.js"); 
export const workerPersonas = new Worker("../WorkerPersonas.js"); 

let dia = diaRecoleccion; 
export async function SimuladorVidrio(values){
    let resultados = [], TB=0, TVM=0 , totales={}; 
    webWorker.postMessage({cmd: 1 , value: values, dia: diaRecoleccion })
         
       /*const {response} =setInfo(values); 
       addValue(response)*/
}

/*
    
    while(dia > 0){
        if(dia === 4){
            let {totalBotellas, totalVidrioMolido}= await Simulador(resultados, values, 4); 
            TB += totalBotellas;
            TVM +=totalVidrioMolido;
            dia = dia - 4; 
        }
        let {totalBotellas, totalVidrioMolido}= await Simulador(resultados, values, 5); 
        TB += totalBotellas;
        TVM +=totalVidrioMolido;
        dia = dia - 5; 
    }
     totales ={
        cant_total_botellas: TB,
        cant_total_baldosas: Math.round(TVM/(1,312)), 
        resultados: resultados.map((res, index) =>{
            return {
                ...res, 
                dia: index+1
            }
        })
    }
    return{totales}; 
    */


