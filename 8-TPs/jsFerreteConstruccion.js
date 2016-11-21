/*2.    Para el departamento de Construcción:
A.   Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.  Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.  Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadDeAlambre;

    largo = document.getElementById('Largo').value;
    ancho = document.getElementById('Ancho').value;

    perimetro         = (largo * 2) + (ancho * 2);
    cantidadDeAlambre = perimetro * 3; //3 vueltas de alambre

    alert("Cantidad de alambre para terreno rectangular: " + cantidadDeAlambre);

}

function Circulo () 
{
    var radio;
    var perimetro;
    var cantidadDeAlambre;

    radio = document.getElementById('Radio').value;
    perimetro = radio * 2 * 3.14;
    cantidadDeAlambre = perimetro * 3; //3 vueltas de alambre

    alert("Cantidad de alambre para terreno circular" + cantidadDeAlambre);

}

function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;

    largo = document.getElementById('Largo').value;
    ancho = document.getElementById('Ancho').value;

    superficie = largo * ancho;
    cemento    = superficie * 2;
    cal        = superficie * 3

    alert("Cantidad de bolsas para hacer el contrapiso: " + cemento + " de cemento y " + cal + " de cal");

}