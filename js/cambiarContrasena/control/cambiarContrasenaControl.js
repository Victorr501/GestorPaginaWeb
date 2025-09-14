console.log("Cambiar contraseña cargado");


//Obtener token de la URL
const params = new URLSearchParams(window.location.search);
const token = params.get("token"); //Este cogera el objeto que sera un toke

const mensaje = document.getElementById("mensaje");

if (!token){
    mensaje.textContent= "No se ha encontrado en la URL";
}

alert(token);

const form = document.getElementById("resetForm");

form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if(password !== confirm){
        mensaje.textContent = "La contraeña no coinciden";
        return;
    }

    if(password.length <= 5){
        mensaje.textContent = "La contraseña es muy corta";
        return;
    }

    try{
        const data = {password: password, token: token};
        const respuesta = await restablecerContrasena(data);
        

        if(respuesta.susscess){
            mensaje.textContent = respuesta.mensaje;
        } else {
            mensaje.textContent = respuesta.mensaje || "Error inesperado";
        }
    } catch (error){
        console.log(error.mensaje);
        mensaje.textContent = error.mensaje
    }

});
