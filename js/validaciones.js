function validarNombre(nombre) {
    if (nombre === "") {
        return "El nombre debe tener al menos 1 caracter.";
    }
    if (nombre.length > 50) {
        return "El nombre debe tener menos de 50 caracteres.";
    }
    if (/^[a-z]+$/i.test(nombre) === false) {
        return "El nombre solo puede contener letras.";
    }
    if (/^[a-z]+$/i.test(nombre) === false) {
        return "El nombre solo puede contener letras.";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "El campo descripción debe tener al menos un caracter.";
    }
    if (descripcionRegalo.length >= 100) {
        return "El campo descripción debe tener menos de 100 caracteres.";
    }
    if (/^[A-z0-9 ]+$/.test(descripcionRegalo) === false) {
        return "La descripción solo puede tener letras y números.";
    }
    return "";
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "La ciudad no puede estar vacía.";
    }
    return "";
}
