function validarSuperficie(superficie) {
    const [xMax, yMax] = superficie.split(',').map(Number);
    return {x: xMax, y: yMax};
}

function validarPosicionInicial(pInicial, superficie) {
    const [x, y] = pInicial.split(',').map(Number);
    const {x: xMax, y: yMax} = validarSuperficie(superficie);
    return x >= 0 && x <= xMax && y >= 0 && y <= yMax;
}

function validarDireccion(direccion) {
    return ["N", "S", "E", "O"].includes(direccion);
}

function avanzar(posicion, direccion, xMax, yMax) {
    let [x, y] = posicion.split(',').map(Number);

    switch(direccion) {
        case "N":
            if (y + 1 > yMax) return "No se puede avanzar";
            y += 1;
            break;
        case "S":
            if (y - 1 < 0) return "No se puede avanzar";
            y -= 1;
            break;
        case "E":
            if (x + 1 > xMax) return "No se puede avanzar";
            x += 1;
            break;
        case "O":
            if (x - 1 < 0) return "No se puede avanzar";
            x -= 1;
            break;
        default:
            return "Dirección Inválida";
    }
    return `${x},${y}`;
}

function girarIzquierda(direccion) {
    const direcciones = { "N": "O", "O": "S", "S": "E", "E": "N" };
    return direcciones[direccion] || "Dirección Inválida";
}

function girarDerecha(direccion) {
    const direcciones = { "N": "E", "E": "S", "S": "O", "O": "N" };
    return direcciones[direccion] || "Dirección Inválida";
}

export {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar, girarIzquierda, girarDerecha};