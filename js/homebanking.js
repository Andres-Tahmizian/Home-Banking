//Declaración de variables
var nombreUsuario = 'Andrés Tahmizian'
var saldoCuenta = 30000; 
var limiteExtraccion = 5000;
var valor = '';
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    
    
}

iniciarSesion();



//Funciones que tenes que completar
function sumar(valor){
	if(valor == null){
		return;
	}
	else if (saldoCuenta>=0) {
		
		console.log(saldoActual= parseInt(saldoCuenta) + parseInt(valor));
		alert('Monto = '+'$'+valor+'\n'+
			'Saldo anterior = '+'$'+saldoCuenta+'\n'+
			'Saldo actual = ' +'$'+saldoActual);'\n'+
		console.log(saldoCuenta=saldoActual);
	}
	else{
		alert('error');
	}
}
function restar(valor){
	if (valor == null) {
		return;
	}
	else if (saldoCuenta>0) { 
		//let resta= prompt('Ingrese un monto');
		console.log(saldoActual= saldoCuenta - valor);
		alert('Monto = '+'$'+valor+'\n'+
			'Saldo anterior = '+'$'+saldoCuenta+'\n'+
			'Saldo actual = ' +'$'+saldoActual);'\n'+
		console.log(saldoCuenta=saldoActual);
		
	}
	else{
		alert('no tiene dinero es su cuenta');
	}

}


function validarExtraccion(){
	debugger;
	var valor = parseInt(prompt('ingrese un monto'));

	//Usuario clickeo cancel
	if(valor === null){
		alert('Operacion cancelada');
		return;

	}
	
	//Puso alguna letra
	else{
		valor = parseInt(valor);
		if(isNaN(valor)){
			alert('Operacion cancelada');
			return;
		}

		else{
			valor =parseInt(valor);
			//Valor es un numero POR FIN!!!.
			if (valor <= 0) {
				alert('el valor debe ser positivo');
			}
			else if (valor > saldoCuenta){
				alert('no posee tanto dinero en cuenta');
			}
			else if(valor > limiteExtraccion){
				alert('El valor supera el limite de extracion');
			}	
			else if (esMultiploDeCien(valor) === false ){
				alert('el valor debe ser multiplo de 100');
				return ;
			}
			else if (esMenorAlSaldo(valor) === false) {
				alert('saldo insuficiente');
			
			}else{
				//CUENTA

				return valor;
				
			}
		}	

	}

	
}
function esMultiploDeCien(valor){

	return valor % 100 === 0;
}

function esMenorAlSaldo(valor){
	
	return valor <= saldoCuenta;
}
 
function servicios(valor){
	debugger;

	
	//Ingresamos un mensaje a mostrar
	var mensaje = confirm('Servicios permitidos a pagar'+'\n'+
	'para seleccionar elija el numero de opcion correspondiente'+'\n'+
	'servicios a pagar:'+'\n'+ '\n'+
	'1 Agua = '+'$'+ agua+'\n'+
	'2 telefono = '+'$'+telefono+'\n'+
	'3 Luz = ' +'$'+luz+'\n'+
	'4 Internet = ' +'$'+internet+'\n');
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		opcion =parseInt(prompt('Introduzca un numero'));
		
	}
	//Detectamos si el usuario denegó el mensaje
	else {
	alert("Operacion cancelada");
		return;
	}

	if(isNaN(opcion)) {
	 	alert('no es un numero');
	 	return;
	}

	if(1 <= opcion && opcion <= 4)  {
		switch(opcion){

		case 1: 
			alert('el monto a pagar es de '+'$'+ agua);
			valor = agua;
			break;

		case 2: 'telefono = '+'$'+ telefono;
			valor = telefono;
			break;

		case 3: 'Luz = '+'$'+ luz;
			valor = luz;
			break;

		case 4: 'Internet = '+'$'+ internet;
			valor = internet;
			break;

		default: 
			break;	
		}

		return valor;

	}
	else {
		alert('ingrese un valor correcto');
		return;
	}
}

function validarTransferenciaAmiga(valor){
 	debugger;
	 let montoATransferir = parseInt(prompt("Ingrese el monto a transferir:", "p. ej.: 4000"));
	 let numeroDeCuenta = 0;
   
	 if(saldoCuenta < montoATransferir){
	   alert("No hay saldo suficiente para realizar esta operación.");
	 }
	 else if(isNaN(montoATransferir)){
	   alert("No ingresaste un monto válido." + "\n" +
			 "Recuerda ingresar números solamente.");
			 return;
	 }
	 else{
	   numeroDeCuenta = parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero:"));
	 }
	   if(numeroDeCuenta === cuentaAmiga1.numero || numeroDeCuenta === cuentaAmiga2.numero){
		 valor = montoATransferir;
		 restar(valor);
		 alert("La transacción se ha realizado con éxito." + "\n" +
			   "Se han transferido: $" + valor + "." + "\n" +
			   "Cuenta destino:" + numeroDeCuenta + ".");
			   actualizarSaldoEnPantalla();
	   }
	   else{
		 alert("El número de cuenta introducido no pertenece a ningún cliente.")
	   }
 	

}





function cambiarLimiteDeExtraccion() {
	let cambiarLimiteExtraccion = parseInt(prompt("Ingresa un nuevo límite de extracción:"));
	
	if (isNaN(cambiarLimiteExtraccion)) {
		alert("No ingresaste un monto válido." + "\n" +
		"Recuerda ingresar números solamente.");
		return;
		
	} else {
		limiteExtraccion = cambiarLimiteExtraccion;
		alert("El límte de extraccón se ha cambiado satisfactoriamente." + "\n" + "\n" +
		"El nuevo límite de extracción es: $" + limiteExtraccion);
		actualizarLimiteEnPantalla();
	}
	
	val = getElementById('limite-extraccion');
		actualizarLimiteEnPantalla();
	


}

function extraerDinero() {
	let extraer = validarExtraccion();
	restar(extraer);
	actualizarSaldoEnPantalla();
}

function depositarDinero() {
	let depositar = validarExtraccion();
	sumar(depositar);
	actualizarSaldoEnPantalla();	
}

function pagarServicio() {
	let pagar = servicios();
	restar(pagar);
	actualizarSaldoEnPantalla();
}		

function transferirDinero() {
	let tranfe = validarTransferenciaAmiga();
	

}

function iniciarSesion() {

	// pedir al usuario que ingrese la clave de su cuenta
	var contra = prompt('Ingrese una contraseña');

	if (contra === null) {

		alert('Operacion cancelada');
		return;

	}
	
	if(usuario.contra !== contra){
		alert('Contraseña incorrecta');

		usuario.saldo = 0;

		//TODO: actualizar saldo en pantalla

		return iniciarSesion();
	}
	else{
		alert('Bienvenido '+ nombreUsuario +' ya puedes realizar operaciones');
		var nombre = document.getElementById('nombre');
		nombre.innerHTML = ('Bienvenido ${usuario.nombre} ${usuario.apellido}');
		nombre.style.color = 'red';
	}
}







//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



