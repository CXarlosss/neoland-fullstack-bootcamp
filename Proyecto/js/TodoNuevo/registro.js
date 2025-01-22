//registro de comercios
function registrarComercioActividad(nombre, descripcion, precio, ubicacion, horarios) {
    // Validar que el precio sea un número válido
    if (isNaN(precio) || precio <= 0) {
        alert('El precio debe ser un número válido y mayor que 0.');
        return;
    }

    // Validar que los campos obligatorios estén completos
    if (!nombre || !descripcion || !ubicacion || !horarios) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Si todo está correcto
    alert(`Comercio/Actividad "${nombre}" registrado con éxito.`);
}