

// Antes decía "formulario", pero en tu index.html pusiste "loginForm"
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        // Asegúrate de que el archivo del formulario se llame exactamente "form.html"
        window.location.href = "form.html";
    } else {
        document.getElementById("error").innerText = "Datos Incorrectos papu";
    }
});