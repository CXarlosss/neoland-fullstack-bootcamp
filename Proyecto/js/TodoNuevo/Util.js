//Manejo de datos
//funcion para validar campos que por si esta vacio o no tiene definido ningun
function validarCamposRequeridos(obj){
    return Object.values(obj).every(campo => campo !== undefined && campo !==null && campo !== '')
}
//Funcion para mostrar la alerta de la informacion
function mostrarAlerta(mensaje,tipo = "info") {
    alert(`[$(tipo.toUpperCase())] ${mensaje}`)
    
}
