function probarValidarEdad() {
    console.assert(
        validarEdad(12) === "",
        "validarEdad no funcionó con una edad válida."
    );
    console.assert(
        validarEdad("") === "Los campos edad no pueden estar vacíos.",
        "validarEdad no funcionó con una edad vacía."
    );
    console.assert(
        validarEdad(-211) === "La edad debe ser mayor a 0.",
        "validarEdad no rechazó una edad negativa."
    );
    console.assert(
        validarEdad("diecinueve") === "Los campos edad deben tener solo números.",
        "validarEdad no rechazó una edad escrita con letras."
    );
    console.assert(
        validarEdad("13124124") === "Los campos edad deben tener entre 1 y 3 números.",
        "validarEdad no rechazó una edad muy larga."
    );
}

function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes("") ===
            "La cantidad de integrantes no puede estar vacía.",
        "validarCantidadIntegrantes no funcionó con un campo vacío."
    );
    console.assert(
        validarCantidadIntegrantes(-3) ===
            "La cantidad de integrantes debe ser mayor a 0.",
        "validarCantidadIntegrantes no funcionó con un número negativo."
    );
    console.assert(
        validarCantidadIntegrantes("letras") ===
            "El campo de cantidad de integrantes solo puede contener números.",
        "validarCantidadIntegrantes no funcionó con letras."
    );
    console.assert(
        validarCantidadIntegrantes("123.12") ===
            "El campo de cantidad de integrantes debe tener un número entero.",
        "validarCantidadIntegrantes no funcionó con un número con decimales."
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdad();
