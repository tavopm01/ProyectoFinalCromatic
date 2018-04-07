var textoCelda;

myFunction = function(){
    
var tablaIngreso   = document.createElement("table");
var CuerpoIngreso = document.createElement("tbody");
//////////////////// TABLA PRINCIPAL ///////////////////////
var filaIngreso = document.createElement("tr"); //fila
var celdaNoPared = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("No.Pared");
    celdaNoPared.appendChild(textoCelda);
    filaIngreso.appendChild(celdaNoPared);

var celdaBaseP = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Base Pared");
    celdaBaseP.appendChild(textoCelda);
    filaIngreso.appendChild(celdaBaseP);

var celdaAlturaP = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Altura Pared");
    celdaAlturaP.appendChild(textoCelda);
    filaIngreso.appendChild(celdaAlturaP);

var celdaVentana = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Tiene Ventana?");
    celdaVentana.appendChild(textoCelda);
    filaIngreso.appendChild(celdaVentana);

var celdaventanaaltura = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Altura Ventana");
    celdaventanaaltura.appendChild(textoCelda);
    filaIngreso.appendChild(celdaventanaaltura);

var celdaventanabase = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Base Ventana");
    celdaventanabase.appendChild(textoCelda);
    filaIngreso.appendChild(celdaventanabase);

    var celdapuerta = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Tiene Puerta?");
    celdapuerta.appendChild(textoCelda);
    filaIngreso.appendChild(celdapuerta);

var celdapuertaaltura = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Altura Puerta");
    celdapuertaaltura.appendChild(textoCelda);
    filaIngreso.appendChild(celdapuertaaltura);

var celdapuertabase = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Base Puerta");
    celdapuertabase.appendChild(textoCelda);
    filaIngreso.appendChild(celdapuertabase);

var filaIngreso2 = document.createElement("tr"); //fila DE DATOS

var celdanumeropared = document.createElement("td"); //celda fila
    textoCelda = document.createTextNode("Base Puerta");
    celdanumeropared.appendChild(textoCelda);
    filaIngreso2.appendChild(celdanumeropared);

CuerpoIngreso.appendChild(filaIngreso);
CuerpoIngreso.appendChild(filaIngreso2);
tablaIngreso.appendChild(CuerpoIngreso);
document.body.appendChild(tablaIngreso);


tablaIngreso.setAttribute("border", "2");

////////////////////////////////////////////////////////////////////////////////////////////////

var btn = document.createElement("BUTTON");
var t = document.createTextNode("Agregar a cotizacion");
btn.appendChild(t);
document.body.appendChild(btn);
btn.onclick(hola());
 

}

hola = function() {
    alert("hi");
    textoCelda = document.createTextNode("No.Pared2");
    celdaNoPared.appendChild(textoCelda);
}