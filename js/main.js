function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    keys.forEach(function (key) {
        const error = errores[key];
        if (document.querySelector(`#error-${key}`)) {
            document.querySelector(`#error-${key}`).remove();
        }
        if (error) {
            $formulario[key].classList.add("error");
            const $error = document.createElement("li");
            $error.innerText = error;
            $error.id = `error-${key}`;
            $errores.appendChild($error);
        } else {
            $formulario[key].classList.remove("error");
        }
    });
}

function validarFormulario(event) {
    const nombre = document.formulario.nombre.value;
    const ciudad = document.formulario.ciudad.value;
    const comportamiento = document.formulario.comportamiento.value;
    const descripcionRegalo = document.formulario["descripcion-regalo"].value;
    let errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo),
    };
    let cantidadErrores = 0;
    Object.keys(errores).forEach(function (key) {
        if (errores[key] !== "") {
            document.formulario[key].classList.add("error");
            cantidadErrores += 1;
        } else {
            document.formulario[key].classList.remove("error");
        }
    });
    if (cantidadErrores === 0) {
        $formulario.classList.add("oculto");
        document.querySelector("#exito").classList.remove("oculto");
        setTimeout(function () {
            window.location.href = "wishlist.html";
        }, 5000);
    }
    manejarErrores(errores);
    event.preventDefault();
}

const $formulario = document.formulario;
$formulario.onsubmit = validarFormulario;
