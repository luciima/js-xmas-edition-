/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 */

function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos un caracter.",
        "Validar nombre no validó que el nombre no sea vacío."
    );
    console.assert(
        validarNombre(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 50 caracteres.",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres."
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Este campo debe tener al menos un caracter.",
        "validarCiudad no validó que la ciudad no sea vacía."
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo debe tener al menos un caracter.",
        "validarDescripcionRegalo no validó que la descripción no sea vacía."
    );
    console.assert(
        validarDescripcionRegalo(
            "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 100 caracteres.",
        "validarDescripcionRegalo no validó que la descripción sea menor a 100 caracteres."
    );
}

probarValidarNombre();

probarValidarCiudad();

probarValidarDescripcionRegalo();
