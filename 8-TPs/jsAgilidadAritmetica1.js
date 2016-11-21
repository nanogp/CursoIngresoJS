/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	var primerNumero;
	var segundoNumero;
	var numeroOperador;
	var operador;

	primerNumero 	= Math.floor(Math.random()*10);
	segundoNumero 	= Math.floor(Math.random()*10);
	numeroOperador 	= Math.floor(Math.random()*4);


	document.getElementById('PrimerNumero').value 	= primerNumero;
	document.getElementById('SegundoNumero').value 	= segundoNumero;

	switch (numeroOperador)
		{
                case 0:
                    operador = '+';
                    respuesta = parseInt(primerNumero) + parseInt(segundoNumero);
                    break;

                case 1:
                    operador = '-';
                    respuesta = primerNumero - segundoNumero;
                    break;

                case 2:
                    operador = '*';
                    respuesta = primerNumero * segundoNumero;
                    break;

                case 3:
                    operador = '/';
                    respuesta = Math.floor(primerNumero / segundoNumero);
                    break;
		}

	document.getElementById('Operador').value = operador;


}//FIN DE LA FUNCIÓN
function Responder()
{
	//document.getElementById('Respuesta').value = respuesta;
	if (document.getElementById('Respuesta').value == respuesta)
		{
			alert("Es correcto!");
		}
	else
		{
			alert("la respuesta correcta era " + respuesta);
		}

}//FIN DE LA FUNCIÓN
