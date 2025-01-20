// Marketplace de Productos Locales
//  Página para buscar productos o actividades (Ej. comida, yoga), conectando a los usuarios con pequeños comercios o autónomos registrados.

// Menú de navegación:
  // Inicio
  // Actividades
  // Registrarse
  // Cesta,
  // Contáctanos
/* 
Barra de búsqueda:
  Mostrar campo de búsqueda donde el usuario pueda ingresar el término (Ej. comida, yoga).
  
Función de búsqueda:
    FUNCION realizarBusqueda():
    1. Obtener el término de búsqueda del input (Ej. "yoga", "carne").
    2. Realizar petición a la API con el término de búsqueda.
    3. Filtrar los resultados según el término ingresado.
        SI el término es "yoga":
            - Mostrar actividades relacionadas con yoga (instructores, clases, etc.).
        SINO SI el término es "carne":
            - Mostrar carnicerías cercanas con precios y valoraciones.
    4. Mostrar los resultados en una tabla (o div).
        - Si hay resultados:
            - Crear filas o divs con la actividad o comercio.
            - Mostrar información relevante (nombre, descripción breve, ubicación).
            - Incluir un botón "Ver detalles" que llevará al usuario a la página de detalles.
        - Si no hay resultados:
            - Mostrar mensaje: "No hay resultados."
 */

    //Funcion de realizar la busqueda
    function realizarBusqueda(){
        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
        if(searchTerm == ""){
            alert("Por favor, Ingrese el termino de busqueda.");
            return;
        }
        //Realizar la busqueda de API simulada
        fetchResultadosDeApi(searchTerm)
    }
    //Simulacion de la peticion De API
    function fetchResultadosDeApi(searchTerm){
        const resultados = [
            {id:1,nombre:"Clases de Yoga",tipo:"actividad", descripcion:"Clases de yoga individualizada",ubicacion:"Avenida de la Paz,123"},
            {id:2,nombre:"Carniceria los Tres",tipo:"comercio", descripcion:"Carne fresca de calidad",ubicacion:"Calle de la Libertad, 45"},
            {id:3,nombre:"Crosfit",tipo:"actividad", descripcion:"Clases de Crosfit individualizada",ubicacion:"Calle del Sol, 67"},
            {id:4,nombre:"Fruteria el Valle",tipo:"comercio", descripcion:"Fruteria local de productos locales",ubicacion:"Avenida de la Paz,123"}
        ];
        //Tenemos que filrar los elementos de resultado y crear uno nuevo que contenga searchTerm(metiendolo en minuscula) teniendo nombre o item
        const resultadosFiltrados = resultados.filter(item => 
            item.nombre.toLowerCase().includes(searchTerm) || item,descripcion.toLowerCase().includes(searchTerm)
        );
        mostrarResultados(resultadosFiltrados);
    }
    //Queremos mostrar los resultados
    function mostrarResultados(resultados) {
        //Obtener el contenedor donde mostrar los resultados:
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = '';  // Limpiar resultados previos
        //Comprobamos si hay resultados y su se encuantran o no actividades
        if (resultados.length === 0) {
            resultadosDiv.innerHTML = "<p>No hay resultados.</p>";
            return;
        }
    
        // Crear tabla de resultados
        const tabla = document.createElement('table');
        //Creamos el encabezado de la tabla
        const encabezado = document.createElement('thead');
        encabezado.innerHTML = "<tr><th>Nombre</th><th>Descripción</th><th>Ubicación</th><th>Acción</th></tr>";
        tabla.appendChild(encabezado);
        //Creamos el cuerpo
        const cuerpo = document.createElement('tbody');
        resultados.forEach(item => {
            //Por cada cuerpo se crearan las filas 
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.descripcion}</td>
                <td>${item.ubicacion}</td>
                <td><button onclick="mostrarDetallesProducto(${item.id})">Ver Detalles</button></td>
            `;
            //Agregamos el cuerpo de la tabla a la tabla
            cuerpo.appendChild(fila);
        });
        //Agregamos el Cuerpo y el contenido se lo añadimos al resultado
        tabla.appendChild(cuerpo);
        resultadosDiv.appendChild(tabla);
    }

// Página de detalles del producto/servicio:
/* FUNCION mostrarDetallesProducto():
1. Obtener los detalles del producto o servicio utilizando su itemID.
2. Mostrar información detallada en una sección dedicada.
3. Incluir un botón de acción para contactar o comprar (dependiendo del tipo de servicio). */
    //Despues de añadir el div tendremos que ir creando sobre el div donde veran el usuario la informacion
    function mostrarDetallesProducto(id){
        //Simulacion de los detalles del Producto ((Ejemplos))
        const productos = {
            1:{
                nombre:"Clase de Yoga",
                descripcion:"Clases de Yoga individualizadas para todos los niveles",
                ubicacion:"Avenida de la Paz,123",
                precio:"15€ por clase",
                valoracion:"★★★★★",
                horario:"Lunes a Viernes de 10:00 a 18:00",
                categoria:"Actividad",
                metodoPago:"Efectivo, Tarjeta"
            },
            2: {
                nombre: "Carnicería Los Tres",
                descripcion: "Carnes frescas de calidad, producidas localmente.",
                ubicacion: "Calle de la Libertad, 45",
                precio: "Precio por kilogramo: 5€",
                valoracion: "★★★★☆",
                horarios: "Lunes a Sábado de 08:00 a 14:00",
                categoria: "Comercio",
                metodoPago: "Efectivo, Tarjeta"
            },
            3:{
                nombre: "Crosfit",
                descripcion: "Clases de Crosfit de forma individual o grupal.",
                ubicacion: "Calle del Sol, 67",
                precio: "Precio por clase 20€",
                valoracion: "★★★★☆",
                horarios: "Lunes a Sábado de 08:00 a 20:00",
                categoria: "Actividad",
                metodoPago: "Efectivo, Tarjeta"
            },
            4:{
                nombre: "Fruteria el Valle",
                descripcion: "Fruteria local de productos locales",
                ubicacion: "Avenida de la Paz,123",
                precio: "Precio por kilogramo: 4€",
                valoracion: "★★★★☆",
                horarios: "Lunes a Sábado de 08:00 a 14:00",
                categoria: "Actividad",
                metodoPago: "Efectivo, Tarjeta"
            }
        }
        const producto  = productos[id];
        const detallesDiv = document.getElementById('detalles');
        detallesDiv.innerHTML = `<h2>${producto.nombre}</h2>
        <p><strong>Descripcion:</strong>${producto.ubicacion}</p>
        <p><strong>Precio: </strong>${producto.precio}</p>
        <p><strong>Valoracion: </strong>${producto.valoracion}</p>
        <p><strong>Horarios: </strong>${producto.horarios}</p>
        <p><strong>Categorias: </strong>${producto.categoria}</p>
        <p><strong>Metodo de Pago: </strong>${producto.metodoPago}</p>
        <button onclick="enviarMensajeAProveedor(${id})">Enviar Mensaje</button>`
    }

/*
// Función de contacto o compra:
FUNCION enviarMensajeAProveedor(providerID):
1. Mostrar formulario para que el usuario escriba un mensaje o realice una compra.
2. Validar el formulario (ej. comprobar que el mensaje no está vacío, verificar datos de pago).
3. Al enviar el formulario:
    - Enviar mensaje o realizar la compra.
4. Confirmar al usuario que el mensaje o compra fue realizada con éxito.
 */
//Funcion para enviar mensaje a provedor
    function enviarMensajeAProveedor(providerID){//Definimos la funciion para que tome de valor ProviderID
        const mensaje = prompt("Escribe tu mensaje para el provedor");//Aqui utilizo prompt para que el usuario introduzca un mensaje
        // si el usuario escribe algo se le guarda en una variable mensaje 
        if(mensaje && mensaje.trim() !== ""){
            //Si el usuario cancela o es una cadena vacia Saltara alerta
            alert("Mensaje enviado a proveedor con ID " + providerID + ": " + mensaje);
        }else {
            alert("El mensaje no puede estar vacio.")
        }
    }

/*
// Estructuras de datos:
// Comercios y Actividades:

ESTRUCTURA ComercioActividad:
//Estructura para datis de un comercio o actividad
*/
function ComercioActividad(id,nombre,descripcion,precio,valoracion,ubicacion,horarios,tipo,metodoPago,categoria,imagen,sitioWeb,disponibilidad,comentarios){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.valoracion = valoracion;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.tipo = tipo;
    this.metodoPago = metodoPago;
    this.categoria = categoria;
    this.imagen = imagen;
    this.sitioWeb = sitioWeb;
    this.disponibilidad = disponibilidad;
    this.comentarios = comentarios
}
//Ejemplo de crear un comercio//actividad
const yogaClase = new ComercioActividad(1, "Clases de Yoga", "Clases de yoga individualizadas", "15€ por clase", "★★★★★", "Avenida de la Paz, 123", "Lunes a Viernes de 10:00 a 18:00", "actividad", "Efectivo, Tarjeta", "Deporte", "yoga.jpg", "www.yoga.com", "Disponibilidad: 10 clases por semana", "Excelente profesor, muy profesional.");


/*
// Mensajes para actividades:
ESTRUCTURA Mensaje:

*/
//Estructura del mensaje
function mensaje(id,idUsuario,idProvedor,mensaje,fecha) {
    this.id= id;
    this.idUsuario = idUsuario;
    this.idProvedor = idProvedor;
    this.mensaje = mensaje;
    this.fecha = fecha;
    
}
//ejemplo de lo que quedaria 
const mensaje =  new mensaje(1,123,2,"Quisiera saber mas sobre las clases de Yoga",new Date().toISOString())

/*
// Usuarios:
ESTRUCTURA Usuario:
- ID Usuario (único identificador)
- Nombre Completo
- Correo Electrónico
- Contraseña (encriptada)
- Número de teléfono
- Dirección
- Tipo de usuario (Cliente, Proveedor, Administrador)
- Valoraciones (promedio de las valoraciones de los productos o servicios adquiridos)

// Cesta de compras:
ESTRUCTURA CestaCompra:
- ID Cesta (único identificador)
- ID Usuario (quién está realizando la compra)
- Productos (lista de productos o servicios)
- Precio total
- Estado de la cesta (proceso, completada, pendiente de pago)
- Método de pago
- Fecha de compra

// Historial de transacciones:
ESTRUCTURA HistorialTransacciones:
- ID Transacción (único identificador)
- ID Usuario (quién realizó la transacción)
- ID Proveedor (quién recibió la transacción)
- Producto/Servicio adquirido
- Fecha (fecha y hora de la transacción)
- Método de pago
- Estado de la transacción (completada, pendiente, fallida)

// Proceso de registro de actividad/comercio:
FUNCION registrarComercioActividad():
1. Validar los datos de entrada del comercio/actividad (nombre, descripción, precio, etc.).
2. Registrar el comercio/actividad en la base de datos.
3. Confirmar al proveedor que su actividad ha sido registrada correctamente.
*/
//Funcion parar registrar el comercio/actividad
function registrarComercioActividad(nombre,descripcion,precio,ubicacion,horarios,tipo,metodoPago,categoria) {
    if(nombre && descripcion && precio && ubicacion){
        //Guardaria en base de datos
        alert(`Comercio/actividad ${nombre} registrado con exito`);
    }else{
        alert("Por favor, complete todos los campos.")
    }
    
}
//Ejemplo 
registrarComercioActividad("Clases de Yoga", "Clases de yoga para todos los niveles", "15€ por clase", "Avenida de la Paz, 123", "Lunes a Viernes de 10:00 a 18:00", "actividad", "Efectivo, Tarjeta", "Deporte");

/*
// Gestión de perfil de usuario:
FUNCION gestionarPerfil():
1. Mostrar los datos del usuario (nombre, correo electrónico, dirección, etc.).
2. Permitir al usuario modificar su información (cambiar contraseña, dirección, etc.).
3. Mostrar un historial de compras/actividades realizadas.
4. Permitir valorar productos o servicios adquiridos.

 */
//Gestion de perfil
function gestionarPerfil(usuarioID) {
    const usuario ={
        id:usuarioID,
        nombre:"Juan Perez",
        correo:"juan@correo.com",
        direccion:"Calle de la Paz, 67",
        tipo:"Cliente",
        historialCompras:["Clases de Yoga","Carniceria El Valle"]
    };
    console.log("Perfil de usuario", usuario)
    
}// Mostrar el perfil del usuario con ID 123
gestionarPerfil(123);