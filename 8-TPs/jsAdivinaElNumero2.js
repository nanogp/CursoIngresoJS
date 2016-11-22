/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

/*
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto       = Math.floor(Math.random()*100);
    contadorIntentos    = 0;

    document.getElementById('intentos').value = contadorIntentos;

    console.log("numeroSecreto: " + numeroSecreto);

}

function verificar()
{
    var numero;

    numero = document.getElementById('numero').value;

    contadorIntentos++;
    document.getElementById('intentos').value = contadorIntentos;

    if (numero == numeroSecreto) 
    {
        switch (contadorIntentos)
        {
            case 1:
                alert("Usted es un psíquico");
                break;

            case 2:
                alert("Excelente percepción");
                break;

            case 3:
                alert("Esto es suerte");
                break;

            case 4:
                alert("Excelente técnica");
                break;

            case 5:
                alert("Usted está en la media");
                break;

            default:
                if (contadorIntentos < 11) 
                    {
                        alert("Falta técnica");
                    } 
                else 
                    {
                        alert("Afortunado en el amor!!");
                    }
        }
    } 
    else 
    {
        if (numero < numeroSecreto) 
            {
                alert("Falta...");
            } 
        else 
            {
                alert("Se pasó…");
            }

    }//if (numero == numeroSecreto)

}
*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto       = Math.floor(Math.random()*100);
    contadorIntentos    = 0;

    document.getElementById('intentos').value = contadorIntentos;

    console.log("numeroSecreto: " + numeroSecreto);

}

function verificar()
{
    var numero;

    numero = document.getElementById('numero').value;

    contadorIntentos++;
    document.getElementById('intentos').value = contadorIntentos;

    if (numero > numeroSecreto)
    {
        alert("se pasó…");
    }
    else if (numero < numeroSecreto)
    {
        alert("falta...");
    } 
    else
    {
        if(contadorIntentos == 1)
        {
            alert("Usted es un psíquico");
        }
        else if(contadorIntentos == 2)
        {
            alert("Excelente percepción");
        }
        else if(contadorIntentos == 3)
        {
            alert("Esto es suerte");
        }
        else if(contadorIntentos == 4)
        {
            alert("Excelente técnica");
        }
        else if(contadorIntentos == 5)
        {
            alert("Usted está en la media");
        }
        else if(contadorIntentos < 11)
        {
            alert("Falta técnica");
        }
        else
        {
            alert("Afortunado en el amor!!");
        }//if(contadorIntentos == 1)

    }

}
*/