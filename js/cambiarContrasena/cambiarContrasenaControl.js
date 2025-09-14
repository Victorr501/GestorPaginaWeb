alert("hola mundo");
import {restablecerContrasena}from "../service/tokenService";


//Obtener token de la URL
const params = new URLSearchParams(window.location.search);
const token = params.get("token"); //Este cogera el objeto que sera un toke

const mensaje = document.getElementById("mensaje");

if (!token){
    mensaje.textContent= "No se ha encontrado en la URL";
}

//const form = document.getElementById("boton");

const form = document.getElementById("resetForm");

form.onsubmit(
    alert("Hola mundo")
);


/*form.addEventListener("click", async (event) => {
    event.preventDefault(); //evita recargar la página

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    console.log('Password:', password);
    console.log('Token:', token);


    if (password !== confirm){
        mensaje.textContent = "La contraseña no coinciden";
        return;
    }

    if (password.length <= 6){
        mensaje.textContent = "La contraseña es muy corta";
        return;
    }

    try{
        const data = {password : password, token: token};
        const respuesta = await restablecerContrasena(data);
        mensaje.textContent = respuesta.mensaje ;

        if(respuesta.success){
            window.location.href = "/html/cambiarContrasena/completado.html";
        } else {
            mensaje.textContent = respuesta.mensaje || "Error inseperado";
        }

    } catch(error){
        console.log(error.menssaje);
        mensaje.textContent = error.menssaje;
    };
});
*/


