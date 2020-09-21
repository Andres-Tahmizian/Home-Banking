//Declaración de variables

var nombreUsuario = "Félix Caraballo";
var saldoCuenta = 70000;
var limiteExtraccion = 50000;

var monto;
var montoAExtraer;

var precioDelServicioAgua = 350;
var precioDelServicioTeléfono = 425;
var precioDelServicioLuz = 210;
var precioDelServicioInternet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoDeSeguridad = 1234;
var codigoDeVerificacion;
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

//Funciones creadas
function sumarDinero(monto) {
  saldoCuenta += monto;
  //console.log(saldoCuenta);
}

function restarDinero(monto) {
  saldoCuenta -= monto;
  //console.log(saldoCuenta);
}

// function haySaldoDisponible(montoAExtraer) {
//   if (saldoCuenta > 0) {
//     true;
//   } else {
//     false;
//   }
// }

function extraerDinero() {
  var montoAExtraer = parseInt(prompt("Por favor ingresa el monto a extraer:"));

  if (isNaN(montoAExtraer)) {
    alert("No ingresaste un monto válido." + "\n" +
      "Recuerda ingresar números solamente.");
    extraerDinero();
  } else if (montoAExtraer > saldoCuenta) {
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad");
  } else if (montoAExtraer > limiteExtraccion) {
    alert("El monto ingresado es mayor al límite diario permitido");
  } else if (montoAExtraer % 100 == 0) {
    saldoAnterior = saldoCuenta;
    monto = montoAExtraer;
    restarDinero(monto);
    alert("Has extraido: $" + monto + "." + "\n" +
      "Saldo anterior: $" + saldoAnterior + "." + "\n" +
      "Saldo actual: $" + saldoCuenta + ".");
    actualizarSaldoEnPantalla();
  } else {
    alert("Solo puedes extraer billetes de 100");
    extraerDinero();
  }
}

function depositarDinero() {
  let montoADepositar = parseInt(prompt("Por favor ingrese el monto a depositar:"));

  if (isNaN(montoADepositar) || montoADepositar < 0) {
    alert("No ingresaste un monto válido." + "\n" +
      "Recuerda ingresar números solamente.");
  } else {
    saldoAnterior = saldoCuenta;
    monto = montoADepositar;
    sumarDinero(monto);
    alert("Has depositado: $" + monto + "." + "\n" +
      "Saldo anterior: $" + saldoAnterior + "." + "\n" +
      "Saldo actual: $" + saldoCuenta + ".");
    actualizarSaldoEnPantalla();
  }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  let cambiarLimiteExtraccion = parseInt(prompt("Ingresa un nuevo límite de extracción:"));

  if (isNaN(cambiarLimiteExtraccion)) {
    alert("No ingresaste un monto válido." + "\n" +
          "Recuerda ingresar números solamente.");
    cambiarLimiteDeExtraccion();

  } else {
    limiteExtraccion = cambiarLimiteExtraccion;
    alert("El límte de extraccón se ha cambiado satisfactoriamente." + "\n" + "\n" +
          "El nuevo límite de extracción es: $" + limiteExtraccion);
    actualizarLimiteEnPantalla();
  }
}


function pagoDeServicio(servicio, precioDelServicio) {
  if (saldoCuenta < precioDelServicio) {
    alert("Los fondos son insuficientes para pagar este servicio ");
  } else {
    saldoAnterior = saldoCuenta;
    monto = precioDelServicio;
    restarDinero(monto);
    alert("Has pagado el servicio: " + servicio + "." + "\n" +
      "Saldo anterior: $" + saldoAnterior + "." + "\n" +
      "Saldo actual: $" + saldoCuenta + ".");
      actualizarSaldoEnPantalla();

  }
}



function pagarServicio() {
  let servicioAPagar = parseInt(
    prompt(
      "Ingresa el número que corresponda al servicio que quiere pagar:" +
      "\n" +
      "1- Agua" +
      "\n" +
      "2- Teléfono" +
      "\n" +
      "3- Luz" +
      "\n" +
      "4- Internet"
    )
  );

  if (isNaN(servicioAPagar)) {
    alert("No has seleccionado ningún servicio.");
  } else {
    switch (servicioAPagar) {
      case 1:
        confirm("El monto a pagar por el servicio del Agua son: $" + precioDelServicioAgua + "\n" + "\n" +
                "¿Desea confirmar el pago?");
                pagoDeServicio("Agua", precioDelServicioAgua);
                break;
      case 2:
        confirm("El monto a pagar por el servicio de Teléfono son: $" + precioDelServicioTeléfono + "\n" + "\n" +
                "¿Desea confirmar el pago?");
                pagoDeServicio("Teléfono", precioDelServicioTeléfono);
                break;
      case 3:
        confirm("El monto a pagar por el servicio de Luz son: $" + precioDelServicioLuz + "\n" + "\n" +
                "¿Desea confirmar el pago?");
                pagoDeServicio("Luz", precioDelServicioLuz);
                break;
      case 4:
        confirm("El monto a pagar por el servicio del Internet son: $" + precioDelServicioInternet + "\n" + "\n" +
                "¿Desea confirmar el pago?");
                pagoDeServicio("Internet", precioDelServicioInternet);
                break;
      default:
        alert("No has seleccionado un servicio válido");
        break;

    }
  }
}

function transferirDinero() {
  let montoATransferir = parseInt(prompt("Ingrese el monto a transferir:", "p. ej.: 4000"));
  let numeroDeCuenta = 0;

  if(saldoCuenta < montoATransferir){
    alert("No hay saldo suficiente para realizar esta operación.");
  }
  else if(isNaN(montoATransferir)){
    alert("No ingresaste un monto válido." + "\n" +
          "Recuerda ingresar números solamente.");
  }
  else{
    numeroDeCuenta = parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero:"));
  }
    if(numeroDeCuenta === cuentaAmiga1 || numeroDeCuenta === cuentaAmiga2){
      monto = montoATransferir;
      restarDinero(monto);
      alert("La transacción se ha realizado con éxito." + "\n" +
            "Se han transferido: $" + monto + "." + "\n" +
            "Cuenta destino:" + numeroDeCuenta + ".");
            actualizarSaldoEnPantalla();
    }
    else{
      alert("El número de cuenta introducido no pertenece a ningún cliente.")
    }


}

function iniciarSesion() {
  var codigoDeVerificacion = parseInt(prompt("Por favor ingresa el código de seguridad:"));

  if(codigoDeVerificacion == null || codigoDeVerificacion == ""){
    alert("No se ha ingresado un código de verificación.");
  }
  else if(codigoDeVerificacion == codigoDeSeguridad){
    alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
  }
  else{
    alert("Lo sentimos " + nombreUsuario + ", el código ingresado es incorrecto. Por cuestiones de seguridad el dinero ha quedado retenido. Por favor comuniquese con el departamento de seguridad tecnológica: 0800.4566.3421.");
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
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
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

// function NombresServicios() {
//   this.Telefono = 'Teléfono';
//   this.Luz = 'Luz';

// }

// NombresServicios().Telefono;