function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	console.log("numeroRandom: " + numeroRandom);

	if(numeroRandom > 8)
	{
		alert("EXCELENTE");
	}
	else if(numeroRandom > 3)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}//if(numeroRandom > 8)
	

}//FIN DE LA FUNCIÓN