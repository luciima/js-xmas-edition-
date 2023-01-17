function probarValidarNombre() {
    console.assert(
        validarNombre("") === "El nombre debe tener al menos 1 caracter.",
        "Validar nombre no validó que el nombre no sea vacío."
    );

    console.assert(
        validarNombre(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "El nombre debe tener menos de 50 caracteres.",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres."
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "La ciudad no puede estar vacía.",
        "validarCiudad no rechazó una ciudad vacía."
    );
    console.assert(
        validarCiudad("Catamarca") === "",
        "validarCiudad rechazó una ciudad válida."
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") ===
            "El campo descripción debe tener al menos un caracter.",
        "validarDescripcionRegalo no rechazó una descripción vacía."
    );
    console.assert(
        validarDescripcionRegalo(
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
        ) === "El campo descripción debe tener menos de 100 caracteres.",
        "validarDescripcionRegalo no rechazó una descripción muy larga."
    );
    console.assert(
        validarDescripcionRegalo(",,,,,,,,,,,,,,>{}++{") ===
            "La descripción solo puede tener letras y números.",
        "validarDescripcionRegalo no rechazó una descripción con caracteres inválidos."
    );
    console.assert(
        validarDescripcionRegalo("una pelota") === "",
        "validarDescripcionRegalo rechazó una descripción válida."
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
