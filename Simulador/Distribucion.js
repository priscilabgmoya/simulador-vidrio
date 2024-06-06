import { metodoCongruenciaMultiplicativo, metodoLehmen } from "./Generadores";
import { generarNumero_a, generarNumero_c, generarNumero_m } from "./helps";


export function Normal(media, desvio, variable){
    let sum =0; 
    for (let index = 1; index < 12; index++) {
        let u =0; 
        u =parseFloat( metodoLehmen(generarNumero_a(), generarNumero_c(), (index-1)));
        sum+=u; 
    }
    localStorage.removeItem("semillasLehmen"); 
    // eslint-disable-next-line no-unused-vars
    return Math.round( variable = desvio *(sum -6) + media); 
}

export  function Uniforme(a,b, posicion){
    let u = parseFloat(metodoCongruenciaMultiplicativo(generarNumero_a(), generarNumero_c(), generarNumero_m(), posicion));
    return Math.trunc(a + ((b-a) *u));  
}