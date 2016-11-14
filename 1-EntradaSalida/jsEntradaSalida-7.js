/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// numeroUno numeroDos
	var uno 		= document.getElementById('numeroUno').value;
	var dos 		= document.getElementById('numeroDos').value;
	var resultado 	= parseInt(uno) + parseInt(dos);
	alert("la Suma es " + resultado);
}

function restar()
{
	var uno 		= document.getElementById('numeroUno').value;
	var dos 		= document.getElementById('numeroDos').value;
	var resultado 	= parseInt(uno) - parseInt(dos);
	alert("la Resta es " + resultado);
}

function multiplicar()
{ 
	var uno 		= document.getElementById('numeroUno').value;
	var dos 		= document.getElementById('numeroDos').value;
	var resultado 	= parseInt(uno) * parseInt(dos);
	alert("el Producto es " + resultado);
}

function dividir()
{
	var uno = document.getElementById('numeroUno').value;
	var dos = document.getElementById('numeroDos').value;
	var resultado = parseInt(uno) / parseInt(dos);
	alert("el Cociente es " + resultado);
}

