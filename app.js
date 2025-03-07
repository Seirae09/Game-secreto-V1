//Nuestras variables  utilizadas
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0; 
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 7;

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 al ${numeroMaximoPosible}, por favor`));

    console.log(typeof(numeroUsuario));
    /*
    Este código es para
    la comparacion entre el numero de usuario y numero secreto
    */
    if (numeroUsuario == numeroSecreto) {
        //La condicion se cumplió
        alert(`Acertaste, el número secreto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ("El número secreto es menor");
        } else {
            alert ("El número secreto es mayor");
        }
        // incrementamos el contador cuando el usuario no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert (`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplió
        //alert("Lo siento, no descubriste el número secreto");
    }
}