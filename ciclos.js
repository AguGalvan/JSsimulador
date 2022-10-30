// for(let i=0; i<5; i++) {    //Incrementa hasta 5
//     alert(i)
// }

// for(let i=5; i>0; i--) {   //Descincrementa hasta 0
//     alert(i)
// }

// let i=0 // Desde
// i<5 // Hasta - Condicion
// i++ // Incremento - Actualizacion
// alert(i) // Body (cuerpo)


// Tabla de multiplicar

// let numeroIngresado = parseInt(prompt("Ingrese un numero: "));

// for (let i=1; i<=10; i++){
//     let resultado = numeroIngresado * i;
//     alert(numeroIngresado+ " x "+i+ " = " +resultado); 
// }


// Reserva de turnos

// for(let i=1; i<=5; i++){
//     let nombreDeUsuario = prompt("Ingrese su nombre: ");
//     alert("Turno Nº: "+i+" Nombre: " +nombreDeUsuario)
// }



// Continue  -> En este caso se saltea el 5

// for(let i=1; i<=10; i++){
//     if (i === 5) {
//         continue;
//     }
//     alert("Estamos en la iteracion: "+i)
// }


// Break  -> Interrumpe el ciclo en el valor determinado

// for(let i=1; i<=10; i++){
//     if (i === 5) {
//         break;
//     }
//     alert("Estamos en la iteracion: "+i)
// }




// While  -> el ciclo se repite hasta que en este caso pongamos ESC

// let entrada = prompt("Ingrese un dato: ");

// while (entrada !== "ESC"){
//     alert("El usuario ingreso: " +entrada);
//     entrada = prompt("Ingrese otro dato:");
// }


// Do while

// let numero = 0;

// do{
//     numero = prompt("Ingrese un numero: ")
// } while(parseInt(numero))

// NaN -> Not a Number


// En este caso si ambos nombres ingresados no son iguales el ciclo se repite 


// let repetir =  true;

// do {
//     let nombre = prompt("Ingrese su nombre: ");
//     let nombreConfirmado = prompt("Confirme su nombre de usuario: ");

//     if (nombre === nombreConfirmado) {
//         alert("El nombre de usuario es correcto")
//         repetir = false;
//     } else {
//         alert("Los nombres de usuario no son iguales")
//     }
// } while (repetir);


// switch -> compara el let y corta el ciclo si se repite

let nombre = prompt("Ingrese un nombre:").toUpperCase();

while (nombre !== "ESC") {

switch (nombre) {
    case "JOSE":
        alert("Hola Jose");
        break;
    case "ANA":
        alert("Hola Ana");
        break;
    default:
        alert("Quien sos?");
        break;
}

nombre = prompt("Ingrese un nombre:").toUpperCase();

}