/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
		comentario
		multilinea porque puedo
	*/
	var producto;
	producto 	= "tuvieja";
	producto 	= prompt("ingrese marca","sin marca");
	var precio 	= prompt("ingrese precio","999");
	alert("su producto es: " + producto + " y cuesta un ojo de la cara, o " + precio);

}