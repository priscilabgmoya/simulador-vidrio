import { generarID } from "../Helpers/helps";
import { Normal, Uniforme } from "./Distribucion";
import {  metodoLehmen } from "./Generadores";
import { generarNumero_a, generarNumero_c } from "./helps";
export  async function Simulador(resultado, value, dias){
    const {cantidadPersonas,porcentajeConsumoVidrio,porcentajePersonaReciclan,normalA,normalB} = value; 
    let dia = 0, personas= 0,totalBotellas=0, totalVidrioMolido=0 ; 
    let posicion =0; 
    while(dia <dias){
        let posicionBotella =0; 
        let personaConsumeVidrio =0 , personaNoConsumeVidrio =0, persona_reciclan=0, persona_no_recicla =0; 
        let persona=0, botellasRecicladas =0, vidrioMolido=0; 
        personas = Normal(cantidadPersonas, generarNumero_c(),personas); 

        console.log(dia, personas);
        if(personas < 0) return Simulador(resultado, value,dias-dia);
        while(persona < personas ){
        let  u = parseFloat(metodoLehmen(generarNumero_a(), generarNumero_c(), posicion)); 
        if(u<= parseFloat(porcentajeConsumoVidrio)){
            personaConsumeVidrio ++; 
            posicion++; 
           let u = parseFloat(metodoLehmen(generarNumero_a(), generarNumero_c(), posicion));
            if(u <= parseFloat(porcentajePersonaReciclan)){
                persona_reciclan++;
                posicion++; 
            botellasRecicladas = Uniforme(normalA,normalB, posicionBotella);
            totalBotellas += botellasRecicladas; 
            vidrioMolido = 0.744 * botellasRecicladas; 
            totalVidrioMolido +=vidrioMolido;
            u =0; 
            posicionBotella ++; 
            }else{
                persona_no_recicla++; 
            u=0; 
            }
            u=0; 
        }else{
            personaNoConsumeVidrio ++;
            u=0; 
        }
            persona++; 
        }
        let data ={
           id: generarID(),
           cant_personas: personas,
           cant_personas_vidrio:personaConsumeVidrio , 
           cant_personas_no_vidrio: personaNoConsumeVidrio,
           cant_personas_reciclan: persona_reciclan, 
           cant_personas_no_reciclan: persona_no_recicla, 
           cant_botellas: botellasRecicladas,
           cant_vidrio_molido: vidrioMolido, 
        }
        resultado.push({...data}); 
        dia++; 
    }
    return{totalBotellas, totalVidrioMolido};
}