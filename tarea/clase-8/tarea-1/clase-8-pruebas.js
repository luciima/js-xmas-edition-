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
    console.assert(validarEdad("21") === "", "validarEdad rechazó una edad válida.");
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
    console.assert(
        validarCantidadIntegrantes("3") === "",
        "validarCantidadIntegrantes rechazó una cantidad de integrantes válida."
    );
}

function probarHallarMayorNumero() {
    console.assert(
        hallarMayorNumero([1, 2, 3, 4, 5, 23, 42, 12.21, 15]) === 42,
        "hallarMayorNumero no devolvió el mayor número."
    );
    console.assert(
        hallarMayorNumero([-23, -21, 24, -756, 121]) === 121,
        "hallarMayorNumero no devolvió el mayor número."
    );
}

function probarHallarMenorNumero() {
    console.assert(
        hallarMenorNumero([2, 1, 3, 4, 5, 23, 42, 12.21, 15]) === 1,
        "hallarMenorNumero no devolvió el menor número."
    );
    console.assert(
        hallarMenorNumero([-23, -21, 24, -756, 121]) === -756,
        "hallarMenorNumero no devolvió el menor número."
    );
}

function probarHallarPromedio() {
    console.assert(
        hallarPromedio([2, 1, 3, 4, 5, 23, 42, 12, 15]) === 11.88888888888889,
        "hallarPromedio no devolvió el promedio correcto."
    );
    console.assert(
        hallarPromedio([-23, -21, 24, -756, 121]) === -131,
        "hallarPromedio no devolvió el promedio correcto."
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdad();
probarHallarMayorNumero();
probarHallarMenorNumero();
probarHallarPromedio();
