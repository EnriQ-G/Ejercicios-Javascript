// Tarea
function tarea(){
var queMePongo = prompt(
  "Te ayudaremos a elegir que ponerte (Contesta si o no). ¿Hace Calor?"
);
var condicion = queMePongo == "si";

if (condicion) {
  var ropa = prompt("¿Iras a la playa?");
  if (ropa == "si") {
    document.write("¡Ropa Playera!");
    document.write(
      "<img src= 'https://www.megamaxi.com/catalogo/verano-sierra/wp-content/uploads/2019/06/IMG_0238.jpg'"
    );
  } else if (ropa == "no") {
    document.write("Playera & Shorts");
    document.write(
      "<img src= 'https://ecoremates.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-21-at-6.21.43-PM.jpeg'"
    );
  }
} else if (queMePongo == "no") {
  var haceFrio = prompt("¿Hace frio?");
  var condicion2 = haceFrio == "si";

  if (condicion2) {
    var ropa2 = prompt("¿Iras a esquiar?");
    if (ropa2 == "si") {
      document.write("Ropa para Esquiar");
      document.write(
        "<img src='https://columbia.scene7.com/is/image/ColumbiaSportswear2/2013445_010_f?wid=2304&hei=2418&v=1668443728'"
      );
    } else if (ropa2 == "no") document.write("Ropa para descansar");
    document.write(
      "<img src'https://imagenes.elpais.com/resizer/_ovOWlh3FhlE01b7Nx9oQAOsgS0=/980x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L3U43AQ63BC63LXK4RS3I2V56A.png'"
    );
  }
} else condicion2 = "no";
document.write("Playera & Shorts");
document.write(
  "<img src= 'https://ecoremates.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-21-at-6.21.43-PM.jpeg'"
);
setInterval("location.reload()",10000); 
}

//Ejercicio 1 
function ejercicio1(){
  var bello = prompt("Eres bellisimo/a");

if(bello == "si"){
  alert("Ciertamente")
} else
  alert("No te creo")
  setInterval("location.reload()",10000); 
}

//Ejercicio 2 Número divisible entre 2
function ejercicio2(){
var x = prompt("escribe número aquí");

var num1 = parseInt(x);

if (x % 2 == 0) {
  document.write("Resultado: " + x%2 + " Tu número es divisible entre 2");
} else document.write("Resultado: " + x%2 + "Tu número no es divisible entre 2");
setInterval("location.reload()",10000); 
}

//Ejercicio 3 Saber si un número es par
function ejercicio3(){
  var x = prompt("escribe número aquí");

var num1 = parseInt(x);

if (x % 2 == 0) {
  alert("Tu número es par");
} else alert("Tu número no es par");
setInterval("location.reload()",10000); 
}

//Ejercicio 4 Elegir el número mayor entre dos números
function ejercicio4(){
  var x = prompt("escribe número aquí");

  var y = prompt("escribe un segundo número aquí");
  
  var num1 = parseInt(x);
  
  var num2 = parseInt(y);
  
  if (num1 < num2) {
    document.write("El número menor es " + num1);
  } 
  else if(num2<num1);
  document.write("El número menor es " + num2);
  
setInterval("location.reload()",10000); 
}

//Ejercicio 5 Calificar dependiendo del número
function ejercicio5(){
  var calificacion = prompt("Escribe un número del 1 a 10")
var num1 = parseInt(calificacion)

if(num1 > 10){
  document.write("error")
  
}
else if (num1 <=6)
  document.write("reprobado")
else if (num1 <=8)
  document.write("regular")
else if(num1==9)
  document.write("bien")
else
  document.write("excelente")
  setInterval("location.reload()",10000); 
}

//Ejercicio 6 Elige tu topping favorito
function ejercicio6(){
  var helado = prompt(
    "Gracias por elegirnos, " +
      "elige el topping de tu preferencia: oreo, kitkat, brownie"
  );
  
  var result = helado.toUpperCase()
  
  if (result == "OREO") {
    document.write("El topping de oreo cuesta 10 MXN");
  } else if (result == "KITKAT") {
    document.write("El topping de KitKat cuesta 15 MXN");
  } else if (result == "BROWNIE") {
    document.write("El topping de brownie cuesta 20 MXN");
  } else document.write("El helado sin topping cuesta 50 MXN");
  setInterval("location.reload()",10000);  
}

//Ejercicio 7 Cuánto cosatará tu curso
function ejercicio7(){
  var curso = prompt("Elige que nivel educativo: Coursera, Carrera, Master");
  var beca = prompt("Cuentas con alguna beca: Facebook, Google, Jesua");
  
  var mensualidad 
  var costo
  var descuento
  
  if (curso == "Coursera") {
    mensualidad = 3;
    costo = 4999;
  } else if (curso == "Carrera") {
    mensualidad = 6;
    costo = 3999;
  } else if (curso == "Master") {
    mensualidad = 12;
    costo = 2999;
  }
  
  if (beca == "Facebook") {
    descuento = 0.2;
  } else if (beca == "Google") {
    descuento = 0.15;
  } else if (beca == "Jesua") {
    descuento = 0.5;
  }
  
  document.write("El curso elegido es: " + curso);
  document.write(
    "<br> El costo del curso es: " + mensualidad * costo * (1 - descuento) + " pesos"
  );
  document.write("<br> La duración del curso es: " + mensualidad + " meses");
  setInterval("location.reload()",10000);   
}

// Ejercicio 8 Cómo me resulta mejor ir
function ejercicio8(){
  var vehiculo = prompt("En que viajas: auto, moto, autobus");
var distancia = prompt("Cuántos km has recorrido");

var costo;
var extra;

if (vehiculo == "auto") {
  costo = 0.2;
} else if (vehiculo == "moto") {
  costo = 0.1;
} else if (vehiculo == "autobus") {
  costo = 0.5;
}

if (distancia <= 100) {
  extra = 5;
} else extra = 10;

document.write("El costo será de: " + ((costo*distancia)+extra))
setInterval("location.reload()",10000); 
}