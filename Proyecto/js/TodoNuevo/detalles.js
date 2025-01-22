import { fetchApiData } from "./api";


async function mostrarDetallesProducto(id) {
    const data = await fetchApiData();
    const producto = data.find(item => item.id === id);

    const detallesDiv = document.getElementById('detalles');
    if(producto){
        detallesDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p><strong>Descripcion:</strong>${producto.descripcion}</p>
        <p><strong>Precio:</strong>${producto.precio}</p>
        <p><strong>Valoracion:</strong>${producto.valoracion}</p>
        <p><strong>Horarios:</strong>${producto.horarios}</p>
        <p><strong>Categoria:</strong>${producto.categoria}</p>
        <p><strong>Metodo de Pago:</strong>${producto.metodoPago}</p>
        <button onclick ="enviarMensajeAProvedor(${producto.id})">Enviar Mensaje </button>
        `;
    }else{
        detallesDiv.innerHTML = "<p>Producto no encontrado </p>";
    }
}
function enviarMensajeAProvedor(providerID){
    const mensaje = prompt("Escribe tu mensaje para el proveedor:")
    if(mensaje && mensaje.trim() !== ""){
        alert("Mensaje enviado al proveedor con ID" + providerID + ":" + mensaje);
    }else{
        alert("El mensaje no puede estar vacio");
    }
}
export {mostrarDetallesProducto, enviarMensajeAProvedor};