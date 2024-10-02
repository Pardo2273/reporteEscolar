//captamos el elemento ul
let elementoLista = document.getElementById('lista');

//esto para dar los otros resultados de las funciones
let respuesta= document.getElementById('resultado');

//arreglo que se emplea para las 5 notas
const arreglo = [100, 40, 50, 65, 70];

function mostrarNotas(){
    //captamos la lista para agregarle las notas
    for(nota of arreglo){
        //armamos el item de la lista
        let texto= "Nota: " + nota;

        let itemLista = document.createElement("li");
        itemLista.innerText = texto;

        elementoLista.appendChild(itemLista);
    }
}

function promedio(){
    let promedio = 0;
    for(let x = 0; x < arreglo.length; x++){
        promedio = promedio + arreglo[x];
    }
    promedio = promedio/arreglo.length;
    
    respuesta.textContent = "El promedio es de: " + promedio;
}

//por agregar
function mayor(){

}

function aplazado(){

}
