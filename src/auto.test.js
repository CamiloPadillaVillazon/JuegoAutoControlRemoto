import {validarSuperficie, validarPosicionInicial} from "./auto.js"


describe("Validaciones", () => {
    it("Debería validar el tamaño de la superficie", () => {
        expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
    });

    it("Debería validar la posición inicial si está en rango de la superficie", () => {
        expect(validarPosicionInicial("4,5", "5,5")).toEqual(true);
    });






});