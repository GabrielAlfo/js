let opcion = "";
let precio = 0;
let seguirComprando = false;
let userInput = " ";

const telefonos = ["iphone", "samsung", "huawei", "xiaomi", "motorola"];
const preciosTelefonos = [1000, 800, 600, 500, 400];
const reparaciones = ["pantalla", "bateria", "software", "camara", "conexion"];
const preciosReparaciones = [100, 50, 80, 70, 60];

function buscarTelefono(modelo) {
  const index = telefonos.indexOf(modelo.toLowerCase());
  if (index !== -1) {
    return preciosTelefonos[index];
  } else {
    return 0;
  }
}

function buscarReparacion(servicio) {
  const index = reparaciones.indexOf(servicio.toLowerCase());
  if (index !== -1) {
    return preciosReparaciones[index];
  } else {
    return 0;
  }
}

function mostrarMenu() {
  opcion = prompt("¿Quieres consultar un teléfono o un servicio de reparación?");
}

function consultarTelefonos() {
  do {
    userInput = prompt("Ingrese un teléfono: iPhone, Samsung, Huawei, Xiaomi, Motorola");
    precio = buscarTelefono(userInput);
    alert("El precio del teléfono " + userInput + " es:  $ " + precio);
    seguirComprando = confirm("¿Quieres ver otro precio?");
  } while (seguirComprando);
}

function consultarReparaciones() {
  do {
    userInput = prompt("Ingrese un servicio de reparación: Pantalla, Batería, Software, Cámara, Conexión");
    precio = buscarReparacion(userInput);
    alert("El precio de la reparación por " + userInput + " es: $ " + precio);
    seguirComprando = confirm("¿Quieres ver otro precio?");
  } while (seguirComprando);
}

function main() {
  mostrarMenu();
  if (opcion.toLowerCase() === "telefono") {
    consultarTelefonos();
  } else if (opcion.toLowerCase() === "reparacion") {
    consultarReparaciones();
  } else {
    alert("Opción inválida. Por favor, ingresa 'telefono' o 'reparacion'.");
    main()
  }
}

main();