import Calculo from "./calculo"

export default class Raiz extends Calculo {
    public calcular(numero: number, indice: number): number {
        return numero ** (1 / indice)
    }
}