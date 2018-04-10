var PosicionSalvar = 0;
var salvar = new Array;
var body = document.body;
var h1 = document.createElement("h1");
var checkbox = document.createElement("checkbox");
var table1 = document.createElement("table");
var tituloaceite = document.createElement("h1");
var tablea = document.createElement("table");
var divtablas = document.createElement("div");
var divResultados = document.createElement("div");
var imprimirtabla;
var arreglar = new Array;
var totalmetros = 0;
var validacion = 0;
var mensaje = "";

var $aceite = [13,240.50,432.35,1821.65,"Aceite"];
var $agua = [10,150,250,999,"Agua"];
var $oleo = [12,386.85,663.25,3103.55,"Oleo"];
var $presentacion = [1.89,3.785,18.925]; // 1/2, galon, cubeta
var litros,cubeta,galones,galonesreales,galonesfaltantes,mediogalon,cobrogalonpendiente,totalsubcuenta;
var descuentocubetagratis,descuentogalonesgratis,quedesc,divisioncubeta,resolucioncubeta,quedesc2,divisiongalones;

var filacotizacion, colummnacotizacion;
//prueba

//prueba

var quesera = function(){
    LP = document.getElementById("LabelNoPared").innerHTML;
    AP = document.getElementById("AlturaPared").value;
    AB = document.getElementById("BasePared").value;
    LD = document.getElementById("CheckPuerta").checked;
    if (LD){
        LD = "SI";
        AD = document.getElementById("AlturaPuerta").value;
        BD = document.getElementById("BasePuerta").value;
      } else {
        LD = "NO";
        AD = 0;
        BD = 0;
      }
    LW = document.getElementById("CheckVentana").checked;
    if (LW){
        LW = "SI";
        AW = document.getElementById("AlturaVentana").value;
        BW = document.getElementById("BaseVentana").value;
      } else {
        LW = "NO";
        AW = 0;
        BW = 0;
      }
      if(AP == 0){mensaje = mensaje + "La altura de la pared no puede ser 0 \n";validacion = 1;}
      if(AB == 0){mensaje = mensaje + "La base de la pared no puede ser 0 \n";validacion = 1;}
      alert(validacion);
      if(LD == "SI"){
      if(AD == "0"){mensaje = mensaje + "La altura de la puerta no puede ser 0 \n";validacion = 1;}
      if(BD == "0"){mensaje = mensaje + "La base de la puerta no puede ser 0 \n";validacion = 1;}
    }
    alert(validacion);
      if(LW == "SI"){ 
      if(AW == "0"){mensaje = mensaje + "La altura de la ventana no puede ser 0 \n";validacion = 1;}
      if(BW == "0"){mensaje = mensaje + "La base de la ventana no puede ser 0 \n";validacion = 1;}
    }
    alert(validacion);
     if (validacion == 0){
      
    salvar[PosicionSalvar] = [LP,AP,AB,LD,AD,BD,LW,AW,BW];
    PosicionSalvar = PosicionSalvar + 1;
    document.getElementById("LabelNoPared").innerHTML = PosicionSalvar+1;

    h1.remove();
    table1.remove();
    tituloaceite.remove();
    tablea.remove();
    divtablas.remove();
    body = document.body;
    divtablas = document.createElement("div");
    divtablas.id = "tablasresultado";
    h1 = document.createElement("h1");
    h1.align = "center";
    table1 = document.createElement("table");
    table1.id = "ParedesTabla";
    h1.innerHTML = "Paredes a pintar";
    table1.border="3";
    table1.width = "50%";
    var trx = document.createElement("tr");
        var tdx = document.createElement("td");
        tdx.colSpan = "10";
        tdx.align = "center";
        tdx.innerHTML = "Tabla de Medidas"; 
        trx.appendChild(tdx); 
table1.appendChild(trx);

    trx = document.createElement("tr");
    
    // ciclo correspondiente a las columnas

    for(j=0;j<10;j++){
        tdx = document.createElement("td");
            switch(j){ 
                case 0: tdx.innerHTML = "Pared"; break;
                case 1: tdx.innerHTML = "Altura"; break;
                case 2: tdx.innerHTML = "Base"; break;
                case 3: tdx.innerHTML = "Puerta"; break;
                case 4: tdx.innerHTML = "Altura"; break;
                case 5: tdx.innerHTML = "Base"; break;
                case 6: tdx.innerHTML = "Ventana"; break;
                case 7: tdx.innerHTML = "Altura"; break;
                case 8: tdx.innerHTML = "Base"; break;
                case 9: tdx.innerHTML = "Mts <sup>2</sup>"; break;
                default: alert("contactar a soporte");
            }
                trx.appendChild(tdx); 
    }

table1.appendChild(trx);

for(i=0;i<(PosicionSalvar);i++){
    arreglar = salvar[i];
    arreglar[9] = (arreglar[1] * arreglar[2]) - (arreglar[4] * arreglar[5]) - (arreglar[7] * arreglar[8]);
    totalmetros = totalmetros + arreglar[9];
    arreglar[9] = arreglar[9] +" Mts <sup>2</sup>";
        trx = document.createElement("tr");

        // ciclo correspondiente a las columnas

        for(j=0;j<10;j++){

            tdx = document.createElement("td");

            tdx.innerHTML = arreglar[j] ;

            trx.appendChild(tdx); 

        }

    table1.appendChild(trx);
 }

 trx = document.createElement("tr");
 tdx = document.createElement("td");
 tdx.colSpan = "9";
 tdx.align = "center";
 tdx.innerHTML = "Total de Mts <sup>2</sup>" ;
 trx.appendChild(tdx); 
 tdx = document.createElement("td");
 tdx.align = "center";
 tdx.innerHTML = totalmetros + " Mts <sup>2</sup>" ;
 trx.appendChild(tdx); 
 table1.appendChild(trx);
    
//    body.appendChild(h1);
    table1.align = "center";
    divtablas.appendChild(table1);
    body.appendChild(divtablas);
//    body.appendChild(table1);

document.getElementById("AlturaPared").value = 0;
    document.getElementById("BasePared").value = 0;
    document.getElementById("AlturaPuerta").value = 0;
    document.getElementById("BasePuerta").value = 0;
    document.getElementById("AlturaVentana").value = 0;
    document.getElementById("BaseVentana").value = 0;
    
 }else{alert("Alerta!!!! \n "+mensaje);
 validacion = 0; 
mensaje = "";}

}

var cotizaraceite = function(){
    creartabla($aceite);
}

var cotizaraagua = function(){
    creartabla($agua);
}

var cotizaraoleo = function(){
    creartabla($oleo);
}

var habilitaDeshabilita=function(form) 
{
    if (form.CheckVentana.checked == false)
    {
    document.getElementById('AlturaVentana').disabled = true;
    document.getElementById('BaseVentana').disabled = true;
    
    }
 
    if (form.CheckVentana.checked == true)
    { 
    document.getElementById('AlturaVentana').disabled = false;
    document.getElementById('BaseVentana').disabled = false;
    }
 
}
var habilitaDeshabilita2 = function(form)
{
    if (form.CheckPuerta.checked == false)
    {
    document.getElementById('AlturaPuerta').disabled = true;
    document.getElementById('BasePuerta').disabled = true;
    }
 
    if (form.CheckPuerta.checked == true)
    { 
    document.getElementById('AlturaPuerta').disabled = false;
    document.getElementById('BasePuerta').disabled = false;
    }
 
}

function creartabla(arrayaux){
    var precios = new Array;
    precios = arrayaux;

    h1.remove();
    table1.remove();
    tituloaceite.remove();
    tablea.remove();
    body = document.body;
    tituloaceite = document.createElement("h1");
    tituloaceite.innerHTML ="Cotizacion pintura de "+precios[4]+" < - > Mts <sup>2</sup> a cubrir " + totalmetros;
    tituloaceite.align = "center"
    
    /* $aceite = [13,240.50,432.35,1821.65];
    var $presentacion = [1.89,3.785,18.925]; // 1/2, galon, cubeta
    var litros,cubeta,galones,mediogalon;*/
    litros = totalmetros/precios[0];
    cubeta = Math.trunc(totalmetros / $presentacion[2]);
    galonesreales = totalmetros - ($presentacion[2] * cubeta );
    galones = Math.trunc(galonesreales / $presentacion[1])
    galonesfaltantes = galonesreales - ($presentacion[1] * galones);
    if(galonesfaltantes >= $presentacion[0])
    {
        cobrogalonpendiente = 0;
        mediogalon = 0;
        galones = galones + 1;
    }
    else
    {
        cobrogalonpendiente = precios[1];
        mediogalon = 1;
    }
    totalsubcuenta = (cubeta*precios[3])+(galones*precios[2])+cobrogalonpendiente ;
    
    tablea = document.createElement("table");
    
        
    filacotizacion = document.createElement("tr");
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Cotizacion pintura de "+precios[4]+" < - > Mts <sup>2</sup> a cubrir " + totalmetros;
        colummnacotizacion.colSpan = "3";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);  
    tablea.appendChild(filacotizacion);

    filacotizacion = document.createElement("tr");
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Descripcion";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);  
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Cantidad";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Total en Q.";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
    tablea.appendChild(filacotizacion);

    filacotizacion = document.createElement("tr");
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Cubeta";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);  
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = cubeta;
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = (cubeta*precios[3]).toFixed(2);
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
    tablea.appendChild(filacotizacion);

    filacotizacion = document.createElement("tr");
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Galon";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);  
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = galones;
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = (galones*precios[2]).toFixed(2);
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
    tablea.appendChild(filacotizacion);

    filacotizacion = document.createElement("tr");
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = "Medio Galon";
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);  
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = mediogalon;
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
        colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = (mediogalon*precios[1]).toFixed(2);
        colummnacotizacion.align = "center";
        filacotizacion.appendChild(colummnacotizacion);
    tablea.appendChild(filacotizacion);

filacotizacion = document.createElement("tr");
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "Sub-Total";
    colummnacotizacion.align = "center";
    colummnacotizacion.colSpan = "2";
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);  
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = (totalsubcuenta).toFixed(2);
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
tablea.appendChild(filacotizacion);

divisioncubeta = 0;
descuentocubetagratis = 0;
if(cubeta > 4){
        divisioncubeta = Math.trunc(cubeta/5);
        resolucioncubeta = 0;
        quedesc=1;
            descuentocubetagratis = precios[3] *divisioncubeta; 
    }
    if((cubeta >= 2)&&(cubeta <=4)){
        divisioncubeta = 10;
        quedesc=0;
            descuentocubetagratis = 0.10*(cubeta*precios[3]); 
    }  

divisiongalones = 0;
descuentogalonesgratis = 0;
    
if(galones > 4){
        divisiongalones = Math.trunc(galones/5);
        resolucioncubeta = 0;
        quedesc2=1;
            descuentogalonesgratis = precios[2] *divisiongalones; 
    }
    if((galones >= 2)&&(galones <=4)){
        divisiongalones = 10;
        quedesc2=0;
            descuentogalonesgratis = 0.15*(galones*precios[2]); 
    }    

    /////////////////////
    filacotizacion = document.createElement("tr");
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "DESCUENTO";
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);  
    colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = -0 +" Cubetas";
    if(quedesc == 0){
        colummnacotizacion.innerHTML = "10 % Cubetas";
    }
    if(quedesc == 1){
        colummnacotizacion.innerHTML = -divisioncubeta +"  Cubetas";
    }
    
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "-"+descuentocubetagratis.toFixed(2);
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
tablea.appendChild(filacotizacion);
    /////////////////////
    filacotizacion = document.createElement("tr");
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "DESCUENTO";
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);  
    colummnacotizacion = document.createElement("td");
        colummnacotizacion.innerHTML = -0 +" Galones";
    if(quedesc2 == 0){
        colummnacotizacion.innerHTML = "15 % Galones";
    }
    if(quedesc2 == 1){
        colummnacotizacion.innerHTML = -divisiongalones +"  Galones";
    }
    
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "-"+descuentogalonesgratis.toFixed(2);
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
tablea.appendChild(filacotizacion);
    //////////////////////
filacotizacion = document.createElement("tr");
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "Descuento-Total";
    colummnacotizacion.align = "center";
    colummnacotizacion.colSpan = "2";
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);  
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "-"+(descuentocubetagratis+descuentogalonesgratis).toFixed(2);
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
tablea.appendChild(filacotizacion);
//////////////////////   
filacotizacion = document.createElement("tr");
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = "Total Venta";
    colummnacotizacion.align = "center";
    colummnacotizacion.colSpan = "2";
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);  
    colummnacotizacion = document.createElement("td");
    colummnacotizacion.innerHTML = (totalsubcuenta-(descuentocubetagratis+descuentogalonesgratis)).toFixed(2);
    colummnacotizacion.align = "center";
    filacotizacion.appendChild(colummnacotizacion);
tablea.appendChild(filacotizacion);
    //////////// fin tabla
    //body.appendChild(tituloaceite);
    tablea.border="3";
    tablea.width = "50%";
    tablea.align = "center";
    body.appendChild(tablea);
    //************** */
}

