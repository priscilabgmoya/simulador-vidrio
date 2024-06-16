/* eslint-disable no-undef */

// INICIO DE HELPERS// 
function generarID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
function generarNumero_a() {
    let numero = Math.round(Math.random() * 1000); // Multiplicamos por 1000 para obtener un número grande
    if (numero % 2 === 0) { // Si es par
        numero++; // Incrementamos en uno para hacerlo impar
    }
    return numero% 3 !==0  && numero % 5 !== 0 ? numero : generarNumero_a();
}
 function generarNumero_c() {
    let numero = Math.round(Math.random() * 1000); // Multiplicamos por 1000 para obtener un número grande
    return numero; 
}
 function generarNumero_m() {
    return Math.pow(2,32); 
}
 function parsearNro(nro){
    return (`0.${nro}`); 
}

 function restNro(nro, k){
    let newArray = Array.from(nro.toString()); 
    let first = parseInt(newArray.slice(0,k).join("")); 
    let second = parseInt(newArray.slice(k, newArray.length).join(""));
   return {first: first, second: second}; 
}
// FIN DE HELPERS// 

// INCIO DE GENERADORES //
let persistenciaLehmen =[]
let persistencia =[]
 function metodoCongruenciaMultiplicativo(a, n0, m, posicion) {
    let semillas =  persistencia.length !== 0 ? persistencia : [n0];
    let n = (a * semillas[posicion]) % m;
    semillas.push(n);
    persistencia = [...semillas];
    let u = n / m;
    return  u.toPrecision(4); 
}



 function metodoLehmen(n0, t, posicion) {
    let semillas = persistenciaLehmen.length !== 0 ? persistenciaLehmen : [n0];
    let k = t.toString().length;
    let resultado = semillas[posicion] * t;
    const { first, second } = restNro(resultado, k);
    let n = second - first;
    semillas.push(n);
    persistenciaLehmen = [...semillas]; 
    return parsearNro(n);
}
// FIN DE LOS GENERADORES // 

// INICIO DE DISTRIBUCION //

  function Uniforme(a,b, posicion){
    let u = parseFloat(metodoLehmen(generarNumero_a(), generarNumero_c(), posicion));
    return Math.trunc(a + ((b-a) *u));  
}
// FIN DE DISTRIBUCION // 
//worker.js

// INICIO DE SIMULADOR // 
let  totalVidrioMolido=0 
function CalcularPersonas(personas, value){
    const {porcentajeConsumoVidrio,porcentajePersonaReciclan,normalA,normalB} = value; 
    let posicion =0;
        let posicionBotella =0; 
        let persona=0, botellasRecicladas =0,TVM=0, vidrioMolido=0 ,personaConsumeVidrio =0 , personaNoConsumeVidrio =0, persona_reciclan=0, persona_no_recicla =0,
        botellas=0; 
        while(persona < personas ){
        let  u = parseFloat(metodoLehmen(generarNumero_a(), generarNumero_c(), posicion)); 
        console.log(parseFloat(porcentajeConsumoVidrio));
        if(u<= parseFloat(porcentajeConsumoVidrio)){
            personaConsumeVidrio ++; 
            posicion++; 
           let u = parseFloat(metodoLehmen(generarNumero_a(), generarNumero_c(), posicion));
            if(u <= parseFloat(porcentajePersonaReciclan)){
                persona_reciclan++;
                posicion++; 
            botellasRecicladas = Uniforme(normalA,normalB, posicionBotella);
            botellas += botellasRecicladas; 
            vidrioMolido = 0.744 * botellasRecicladas; 
            TVM += vidrioMolido
            totalVidrioMolido +=vidrioMolido;
            u =0; 
            posicionBotella ++; 
            }else{
                persona_no_recicla++; 
            u=0; 

            }
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
           cant_botellas: botellas,
           cant_vidrio_molido:parseFloat(TVM.toFixed(4)), 
        }
        return{data, totalVidrioMolido}; 
    
}
 // FIN DEL SIMULADOR // 

 self.onmessage = async function(e){
    const {cdm , value, personas,} = e.data; 
    if(cdm == "calcular"){
      let { data, totalVidrioMolido}=  CalcularPersonas(personas, value); 
      self.postMessage({cdm:"resultado", data, totalVidrioMolido});
    }
}