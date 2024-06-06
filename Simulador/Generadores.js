import { generarNumero_a, generarNumero_c, generarNumero_m, parsearNro, restNro, sonPrimosRelativos } from "./helps";

export function metodoCongruenciaMultiplicativo(a, n0, m, posicion) {
    let presistencia = localStorage.getItem("semillasCmultiplictivo");
    let semillas = presistencia ? JSON.parse(presistencia) : [n0];
    let n = (a * semillas[posicion]) % m;
    semillas.push(n);
    let u = n / m;
    localStorage.setItem("semillasCmultiplictivo", JSON.stringify(semillas));
    return  u.toPrecision(4); 
}

export function metodoLehmen(n0, t, posicion) {
    let presistencia = localStorage.getItem("semillasLehmen");
    let semillas = presistencia ? JSON.parse(presistencia) : [n0];
    let k = t.toString().length;
    let resultado = semillas[posicion] * t;
    const { first, second } = restNro(resultado, k);
    let n = second - first;
    semillas.push(n);
    localStorage.setItem("semillasLehmen", JSON.stringify(semillas));
    return parsearNro(n);
}
export async function metodoCongruenciaMixto(n0,posicion) {
    let c = generarNumero_c(); 
    let m = generarNumero_m(); 
    if(sonPrimosRelativos(c,m)){
        let presistencia = localStorage.getItem("semillasCmixto");
        let semillas = presistencia ? JSON.parse(presistencia) : [n0];
        let n = (( generarNumero_a() * semillas[posicion]) + c) % m;
        semillas.push(n);
        let u = n / m;
        localStorage.setItem("semillasCmixto", JSON.stringify(semillas));
        return u.toPrecision(4); 
    }else{
        return metodoCongruenciaMixto(n0,posicion); 
    }
}