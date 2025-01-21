//Gestionaremos la API para hacer las llamadas
async function fetchApiData() {
    try{
        const response = await fetch('Api.json')
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Error de la carga de los datos de la Api", error)
        return [];
    }
}

export {fetchApiData}