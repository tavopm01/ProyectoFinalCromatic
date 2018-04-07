var AP,AB,LP = 0;
var AW,AW,LW = 0;
var LD,AD,LD = 0;
var Temporal = new Array;
var Paredes = new Array;
var NoPared = 0;

var $Guardar = function(){ //Si
    LP = document.getElementById("LabelNoPared").innerHTML;
    AP = document.getElementById("AlturaPared").value;
    AB = document.getElementById("BasePared").value;
    LD = document.getElementById("CheckPuerta").value;
    AD = document.getElementById("AlturaPuerta").value;
    BD = document.getElementById("BasePuerta").value;
    LW = document.getElementById("CheckVentana").value;
    AW = document.getElementById("AlturaVentana").value;
    BW = document.getElementById("BaseVentana").value;
    Temporal = [LP,AP,AB,LD,AD,BD,LW,AW,BW];
    Paredes[NoPared] = Temporal;
    NoPared = NoPared + 1;
 
}
var $Mostrar = function(){alert(NoPared)}



