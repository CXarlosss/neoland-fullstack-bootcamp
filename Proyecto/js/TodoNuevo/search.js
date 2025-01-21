//Importamos el fetchApi de api.js

import { fetchApiData } from "./api.js";

async function realizarBusqueda() {
    const searchTerm  = document.getElementById('searchInput').value.trim().toLowerCase();
    if(searchTerm === ""){
        alert("Por favor,ingrese el termino de busqueda");
        return;
    }
    //Esperamos la respuesta de la llamada para ver si los datos coinciden con el filtro de la busqueda
    const data = await fetchApiData();
    const resultadosFiltrados = data.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm) || item.descripcion.toLowerCase().includes(searchTerm)
    );
    mostrarResultados(resultadosFiltrados)
}
//mostramos resultados
function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if(resultados.length === 0){
        resultadosDiv.innerHTML = "<p>No hay resultados que coincidan</p>"
        return;
    }
    //Creando la tabla el encabezado y el las filas 
    const tabla = document.createElement('table');
    const encabezado = document.createElement('thead');
    encabezado.innerHTML = "<tr><th>Nombre</th><th>Descripcion</th><th>Ubicacion</th><th>Accion</th></tr>"
    tabla.appendChild(encabezado);
    //Ahora se crea el cuerpo
    const cuerpo = document.createElement('tbody');
    resultados.forEach(item =>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${item.nombre}</td>
        <td>${item.ubicacion}</td>
        <td>${item.descripcion}</td>
        <td><button onclick="mostrarDetallesProducto(${item.id})">Ver Detalles</button></td>
        `;
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    resultadosDiv.appendChild(tabla);
}

export { realizarBusqueda, mostrarResultados };
    