//registro de comercios
function registrarComercioActividad(nombre, descripcion, precio, ubicacion, horarios, tipo, metodoPago, categoria) {
    if(nombre && descripcion && precio && ubicacion && horarios){
        alert(`Comercio/Actividad ${nombre} registrado con exito.`);
    }else{
        alert("Por favor, complete los campos.")
    }
}
export {registrarComercioActividad}