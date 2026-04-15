document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. Capturamos los valores
    let edad = document.querySelector("input[type='number']").value;
    let email = document.querySelector("input[type='email']").value;
    let valido = true;
    let mensaje = "";

    // 2. Validar campos vacíos
    if (edad.trim() === "" || email.trim() === "") {
        valido = false;
        mensaje = "Todos los campos deben estar completos";
    } 
    // 3. Validar edad (solo si pasó la primera validación)
    else if (parseInt(edad) < 18) {
        valido = false;
        mensaje = "Debes tener al menos 18 años, papu";
    } 
    // 4. Validar correo (si no incluye @ o punto es inválido)
    else if (!email.includes("@") || !email.includes(".")) {
        valido = false;
        mensaje = "Correo inválido, falta el @ o el punto";
    }

    // 5. Resultado final
    if (valido) {
        window.location.href = "valido.html";
    } else {
        alert(mensaje);
    }
});