var PosicionSalvar = 0;
var salvar = new Array;

var quesera = function(){
    LP = document.getElementById("LabelNoPared").innerHTML;
    AP = document.getElementById("AlturaPared").value;
    AB = document.getElementById("BasePared").value;
    LD = document.getElementById("CheckPuerta").value;
    AD = document.getElementById("AlturaPuerta").value;
    BD = document.getElementById("BasePuerta").value;
    LW = document.getElementById("CheckVentana").value;
    AW = document.getElementById("AlturaVentana").value;
    BW = document.getElementById("BaseVentana").value;
    salvar[PosicionSalvar] = [LP,AP,AB,LD,AD,BD,LW,AW,BW];
    PosicionSalvar = PosicionSalvar + 1;
    document.getElementById("LabelNoPared").innerHTML = PosicionSalvar+1;
}
var mostrar = function(){
    alert(salvar);
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