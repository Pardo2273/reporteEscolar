//captamos el elemento ul
let elementoLista = document.getElementById('lista');

//esto para dar los otros resultados de las funciones
let prom = document.getElementById('promedio');
let notaAlta = document.getElementById('notaAlta');
let aprobado = document.getElementById('aplazado');

//arreglo que se emplea para las 5 notas
const arreglo = [10, 40, 50, 65, 70];

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
        //se realiza la suma
        promedio = promedio + arreglo[x];
    }
    //se hace la division para  el promedio
    promedio = promedio/arreglo.length;
    
    //se brinda el resultado cambiando el texto del elemento respuesta
    prom.textContent = promedio;
}

//por agregar
function mayor(){
    //dos variables que son vitales para lograr encontrar el mayor en el arreglo
    let contador= 0;
    let notaMayor = 0;
    //mientras el contador sea distinto a la cantidad de valores que posee el arreglo este se seguira ejecutando
    while(contador != arreglo.length){
        if(notaMayor > arreglo[contador]){
            notaMayor = notaMayor;
        }else{
            notaMayor = arreglo[contador];
        }
        contador++;
    }
    //finalmente devolvemos el valor mayor de las notas que estan dentro del array
    notaAlta.textContent = notaMayor;
}

//como solo intere saber si hay o no aplazados por eso se coloca de la siguiente manera
function aplazado(){
    let contador = 0;
    do{
        //si una nota es menor a 65 se brinda la respuesta de que existe aplazados y de una vez se para el sistema
        if(arreglo[contador] < 65){
            aprobado.textContent = "Si hay aplazados";
            break;
        }
        contador++;
    }while(contador != arreglo.length);// mientras 
}
