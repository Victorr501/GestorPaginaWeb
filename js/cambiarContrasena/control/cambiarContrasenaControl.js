import recuperacionToken from "../service/tokenService";


//Obtener token de la URL
const params = new URLSearchParams(window.location.search);
const token = params.get("token"); //Este cogera el objeto que sera un toke

const mensaje = document.getElementById("mensaje");

if (!token){
    mensaje.textContent= "No se ha encontrado en la URL";
}

const form = document.getElementById("resetForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); //evita recargar la página

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (password !== confirm){
        mensaje.textContent = "La contraseña no coinciden";
        return;
    }

    if (password.length <= 6){
        mensaje.textContent = "La contraseña es muy corta";
        return;
    }

    try{
        const recuperacionToken = {password : password, token: token};
        const respuesta = await recuperacionToken(recuperacionToken);
        mensaje.textContent = respuesta.mensaje ;

        if(respuesta.success){
            window.location.href = "/html/cambiarContraseña/completado.html";
        } else {
            mensaje.textContent = respuesta.mensaje || "Error inseperado";
        }

    } catch(error){
        console.log(error.mensaje);
        mensaje.textContent(error);
    };

});

