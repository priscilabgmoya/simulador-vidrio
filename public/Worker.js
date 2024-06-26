/* eslint-disable no-undef */

// INICIO DE HELPERS// 
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
let persistencia =[]

 function metodoLehmen(n0, t, posicion) {
    let semillas = persistencia.length !== 0 ? persistencia : [n0];
    let k = t.toString().length;
    let resultado = semillas[posicion] * t;
    const { first, second } = restNro(resultado, k);
    let n = second - first;
    semillas.push(n);
    persistencia = [...semillas]; 
    return parsearNro(n);
}
// FIN DE LOS GENERADORES // 

// INICIO DE DISTRIBUCION //
 function Normal(media, desvio, variable){
    let sum =0; 
    for (let index = 1; index < 12; index++) {
        let u =0; 
        u =parseFloat( metodoLehmen(generarNumero_a(), generarNumero_c(), (index-1)));
        sum+=u; 
    }

    // eslint-disable-next-line no-unused-vars
    return Math.round( variable = desvio *(sum -6) + media); 
}

// FIN DE DISTRIBUCION // 
//worker.js

// INICIO DE SIMULADOR // 
const workerPersonas = new Worker("./WorkerPersonas.js"); 
function Simulador(value, dia){
    const {cantidadPersonas} = value; 
    let d = 0, personas= 0 ;  
    while(d <dia){ 
        personas = Normal(cantidadPersonas, generarNumero_c(),personas); 
        if(personas < 0) return Simulador(value,dia-d);
        workerPersonas.postMessage({value, personas, cdm:"calcular"});  
        d++; 
    }
}
 // FIN DEL SIMULADOR // 
 let totales = {}, TVM=0;
self.onmessage =   function(e){
    const {cmd , value, dia,} = e.data; 
    if(cmd === 1){
        Simulador(value, dia); 
    }
}

let resultados= []; let total=0;
workerPersonas.onmessage = function(e){
    let {cdm, data, totalVidrioMolido} = e.data; 
    if(cdm == "resultado"){
        resultados.push({...data}); 
        TVM += totalVidrioMolido;
    }
    resultados?.map((valorAnterior) => {
        total+= valorAnterior.cant_botellas; 
       })
    totales ={
        cant_total_botellas: total,
        cant_total_baldosas: Math.round(TVM/(1,312)), 
        resultados: resultados.map((res, index) =>{
            return {
                ...res, 
                dia: index+1
            }
        })
    }
    self.postMessage({cdm:0, totales:totales });
    total=0; 
}