function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	//if ( !(edad > 12 && edad < 18) )
	if ( edad < 13 || edad > 17 )
	{
		alert("persona No adolescente");
	}//if ( edad < 13 || edad > 17 )


}//FIN DE LA FUNCIÓN