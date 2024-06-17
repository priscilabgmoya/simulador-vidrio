function calcularMCD(a, b) {
    return b === 0 ? a :  calcularMCD(b, a % b); 
}

// Función para verificar si dos números son primos relativos
export function sonPrimosRelativos(a, b) {
    return calcularMCD(a, b) === 1;
}
export function generarNumero_a() {
    let numero = Math.round(Math.random() * 1000); // Multiplicamos por 1000 para obtener un número grande
    if (numero % 2 === 0) { // Si es par
        numero++; // Incrementamos en uno para hacerlo impar
    }
    return numero% 3 !==0  && numero % 5 !== 0 ? numero : generarNumero_a();
}
export function generarNumero_c() {
    let numero = Math.round(Math.random() * 1000); // Multiplicamos por 1000 para obtener un número grande
    return numero; 
}
export function generarNumero_m() {
    return Math.pow(2,32); 
}
export function parsearNro(nro){
    return (`0.${nro}`); 
}

export function restNro(nro, k){
    let newArray = Array.from(nro.toString()); 
    let first = parseInt(newArray.slice(0,k).join("")); 
    let second = parseInt(newArray.slice(k, newArray.length).join(""));
   return {first: first, second: second}; 
}



