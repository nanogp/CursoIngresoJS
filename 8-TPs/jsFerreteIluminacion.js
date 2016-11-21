/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLampara;
    var precioUnitario;
    var porcentajeDescuento;
    var precioDescuento;
    var ingresosBrutos;

    cantidadLamparas = document.getElementById('Cantidad').value;
    marcaLampara     = document.getElementById('Marca').value;
    precioUnitario   = 35;
    
    if (cantidadLamparas >= 6) //caso A
    {
        porcentajeDescuento = 0.5; //50%
    }
    else if (cantidadLamparas == 5) //caso B
    {
        if(marcaLampara == "ArgentinaLuz")
        {
            porcentajeDescuento = 0.6; //40%
        }
        else
        {
            porcentajeDescuento = 0.7; //30%
        }
    }
    else if (cantidadLamparas == 4) //caso C
    {
        if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
        {
            porcentajeDescuento = 0.75; //25%
        }
        else
        {
            porcentajeDescuento = 0.8; //20%
        }
    }
    else if (cantidadLamparas == 3) //caso D
    {
        if(marcaLampara == "ArgentinaLuz")
        {
            porcentajeDescuento = 0.85; //15%
        }
        else if(marcaLampara == "FelipeLamparas")
        {
            porcentajeDescuento = 0.9; //10%
        }
        else
        {
            porcentajeDescuento = 0.95; //5%
        }
    }
    else //cantidad menor o igual a 2
    {
        porcentajeDescuento = 1; //0%
    }

    precioDescuento = precioUnitario * cantidadLamparas * porcentajeDescuento;

    if (precioDescuento > 120)
    {
        ingresosBrutos  = precioDescuento * 0.1;
        precioDescuento = precioDescuento * 1.1;
        alert("Usted pago " + ingresosBrutos + " de IIBB.")
    }

    document.getElementById('precioDescuento').value = parseInt(precioDescuento);
}
