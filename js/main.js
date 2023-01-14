/*
1. Obtener el valor de `ciudad` y validar que no sea vacío.
2. Obtener el valor de `descripcion-regalo` y validar que:
- tenga menos de 100 caracteres
- que no esté vacío.
- sólo tenga letras y números
*/

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos un caracter.";
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres.";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Este campo debe tener al menos un caracter.";
    }
    if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres.";
    }
    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo debe tener al menos un caracter.";
    }
    return "";
}
