let opcion ="";
let precio = 0;
let seguirComprando = false;
let userInput =" ";

opcion = prompt("¿Quieres consultar un teléfono o un servicio de reparación?");
    if (opcion.toLowerCase() === "telefono") {
        do {
            userInput = prompt("Ingrese un teléfono:iPhone,Samsung,Huawei,Xiaomi,Motorola");
                switch (userInput) {
                case "iphone":
                    precio = 1000;
                    break;
                case "samsung":
                    precio = 800;
                    break;
                case "huawei":
                    precio = 600;
                    break;
                case "xiaomi":
                    precio = 500;
                    break;
                case "motorola":
                    precio = 400;
                    break;
                case " ":
                    precio = 0;
                    break;
                }
                alert("El precio del teléfono " + userInput + " es: " + precio);
            seguirComprando = confirm("Queres ver otro precio?");
            } while (seguirComprando)
    } else if (opcion.toLowerCase() === "reparacion") {
        do {
            userInput = prompt("Ingrese un servicio de reparación:Pantalla,Batería,Software,Camara,Conexion");
                switch (userInput) {
                case "pantalla":
                    precio = 100;
                    break;
                case "bateria":
                    precio = 50;
                    break;
                case "software":
                    precio = 80;
                    break;
                case "camara":
                    precio = 70;
                    break;
                case "conexion":
                    precio = 60;
                    break;
                case " ":
                    precio = 0;
                    break;
                }
                alert("El precio de la reparación por " + userInput + " es: " + precio);
                seguirComprando = confirm("Queres ver otro precio?");
            } while (seguirComprando)
    } else {
    alert("Opción inválida. Por favor, ingresa 'telefono' o 'reparacion'.");
    }

