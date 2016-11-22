/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function VerSiGano(eleccionPersona)
{
    alert("Persona: " + eleccionPersona + " vs Maquina: " + eleccionMaquina);
    switch (eleccionMaquina)
    {
        case 'piedra':
            if (eleccionPersona == 'piedra')
            {
                alert("empató");
            }
            else if(eleccionPersona == 'papel')
            {
                alert("ganó");
            }
            else if(eleccionPersona == 'tijera')
            {
                alert("perdió");
            }
            break;

        case 'papel':
            if (eleccionPersona == 'piedra')
            {
                alert("perdió");
            }
            else if(eleccionPersona == 'papel')
            {
                alert("empató");
            }
            else if(eleccionPersona == 'tijera')
            {
                alert("ganó");
            }
            break;

        case 'tijera':
            if (eleccionPersona == 'piedra')
            {
                alert("ganó");
            }
            else if(eleccionPersona == 'papel')
            {
                alert("perdió");
            }
            else if(eleccionPersona == 'tijera')
            {
                alert("empató");
            }
    }

    comenzar();

}

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*3) + 1;

    switch (eleccionMaquina)
    {
        case 1:
            eleccionMaquina = 'piedra';
            break;
        case 2:
            eleccionMaquina = 'papel';
            break;
        case 3:
            eleccionMaquina = 'tijera';
    }
    // alert("máquina: " + eleccionMaquina);

}//FIN DE LA FUNCIÓN

function piedra()
{
    VerSiGano('piedra');

}//FIN DE LA FUNCIÓN

function papel()
{
    VerSiGano('papel');

}//FIN DE LA FUNCIÓN

function tijera()
{
    VerSiGano('tijera');

}//FIN DE LA FUNCIÓN