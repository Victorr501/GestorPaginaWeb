const API_BASE_URL = 'http://localhost:8000/api/v1';

export const restablecerContrasena = async(recuperacionToken) => {
    const url = `${API_BASE_URL}/token/recuperacion`

    try{

        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(recuperacionToken),
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Error en el registro');
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error('Error actualizando contraseña: ', error.message);
        throw error;
    }
}
