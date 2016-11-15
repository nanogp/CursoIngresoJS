/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{   
    // numeroUno numeroDos
    var numeroUno   = document.getElementById('numeroUno').value;
    var numeroDos   = document.getElementById('numeroDos').value;
    var resultado   = parseInt(numeroUno) + parseInt(numeroDos);
    alert("la Suma es " + resultado);
}

function restar()
{
    var numeroUno   = document.getElementById('numeroUno').value;
    var numeroDos   = document.getElementById('numeroDos').value;
    var resultado   = numeroUno - numeroDos;
    alert("la Resta es " + resultado);
}

function multiplicar()
{ 
    var numeroUno   = document.getElementById('numeroUno').value;
    var numeroDos   = document.getElementById('numeroDos').value;
    var resultado   = numeroUno * numeroDos;
    alert("el Producto es " + resultado);
}

function dividir()
{
    var numeroUno   = document.getElementById('numeroUno').value;
    var numeroDos   = document.getElementById('numeroDos').value;
    var resultado   = numeroUno / numeroDos;
    alert("el Cociente es " + resultado);
}
