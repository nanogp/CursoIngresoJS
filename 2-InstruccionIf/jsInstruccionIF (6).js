function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	// if (edad > 17)
	// {
	//     alert("persona mayor de edad");
	// }
	// else if (edad < 13)
	// {
	//     alert("niño");
	// }
	// else
	// {
	//     alert("persona adolescente");
	// }

	if (edad > 17)
	{
		alert("persona mayor de edad");
	}
	else if (edad > 12 && edad < 18)
	{
		alert("persona adolescente");
	}
	else
	{
		alert("niño");
	}//if (edad > 17)

}//FIN DE LA FUNCIÓN