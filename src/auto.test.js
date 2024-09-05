import {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar, girarIzquierda, girarDerecha, cambioPosicion} from "./auto.js"

describe("Validaciones", () => {
    it("Debería validar el tamaño de la superficie", () => {
        expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
    });

    it("Debería validar la posición inicial si está en rango de la superficie", () => {
        expect(validarPosicionInicial("4,5", "5,5")).toEqual(true);
    });

    it("Debería retornar false para una posición fuera del rango", () => {
        expect(validarPosicionInicial("6,5", "5,5")).toEqual(false);
    });

    it("Debería validar dirección inicial del auto", () => {
        expect(validarDireccion("N")).toEqual(true);
    });

    it("Debería retornar false para una dirección inválida", () => {
        expect(validarDireccion("X")).toEqual(false);
    });

    it("Debería validar avanzar la posición del auto", () => {
        expect(avanzar("3,4", "N", 4, 5)).toEqual("3,5");
    });

    it("Debería retornar un error si intenta avanzar fuera de los límites al Norte", () => {
        expect(avanzar("4,5", "N", 4, 5)).toEqual("No se puede avanzar");
    });

    it("Debería retornar un error si intenta avanzar fuera de los límites al Sur", () => {
        expect(avanzar("0,0", "S", 4, 5)).toEqual("No se puede avanzar");
    });

    it("Debería manejar una dirección inválida al girar a la izquierda", () => {
        expect(girarIzquierda("X")).toEqual("Dirección Inválida");
    });

    it("Debería validar giro a la izquierda", () => {
        expect(girarIzquierda("O")).toEqual("S");
    });

    it("Debería validar giro a la derecha", () => {
        expect(girarDerecha("N")).toEqual("E");
    });

    it("Debería manejar una dirección inválida al girar a la derecha", () => {
        expect(girarDerecha("X")).toEqual("Dirección Inválida");
    });

    it("Debería validar el movimiento del auto/cambio de posición y dirección", () => {
        expect(cambioPosicion("2,3", "O", "IAADAIA", 5, 5)).toEqual({x: 1, y: 0, direccion: "S"});
    });






});