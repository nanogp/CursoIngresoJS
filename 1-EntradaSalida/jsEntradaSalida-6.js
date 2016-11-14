/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	// numeroUno numeroDos
	var uno 		= document.getElementById('numeroUno').value;
	var dos 		= document.getElementById('numeroDos').value;
	var resultado 	= parseInt(uno) + parseInt(dos);
	alert("la suma es " + resultado);
}