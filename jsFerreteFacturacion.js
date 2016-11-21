/*1.    Para el departamento de facturación:
A.  Ingresar tres precios de productos y mostrar la suma de los mismos.
B.  Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.  ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno  = document.getElementById('PrecioUno').value;
    PrecioDos  = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;

    Resultado = parseInt(PrecioUno) + parseInt(PrecioDos) + parseInt(PrecioTres);
    alert(Resultado);

}

function Promedio () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno  = document.getElementById('PrecioUno').value;
    PrecioDos  = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;
    
    Resultado = parseInt(PrecioUno) + parseInt(PrecioDos) + parseInt(PrecioTres);
    Resultado /= 3;
    alert(Resultado);

}

function PrecioFinal () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno  = document.getElementById('PrecioUno').value;
    PrecioDos  = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;
    
    Resultado = parseInt(PrecioUno) + parseInt(PrecioDos) + parseInt(PrecioTres);
    Resultado *= 1.21;
    alert(Resultado);

}