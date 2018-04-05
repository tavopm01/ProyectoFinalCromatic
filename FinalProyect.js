var $Size = new Array;
var $WallToPaint = 0;
var $SizeAux = 0;
var $RegistroSize = new Array;
var $auxiliar = new Array;
var $opcion = "";
$RegistoSize = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
$WallToPaint =  parseFloat(prompt("Cromatic Paint \n Cuantas paredes desea pintar?"));
$Size = prompt ("Favor ingrese la base y la altura de la pared # en el formato Base,Altura Ejem. 5,2");
$auxiliar = $Size.split(","); 

/*$auxiliar[1] = parseFloat(prompt ("Favor ingrese la base de la pared #"));
$RegistroSize[0] = $RegistroSize[0] +  ($auxiliar[0] * $auxiliar[1]);
$opcion = prompt("cuenta con ventanas la pared # ?");
if( $opcion.toUpperCase() == "SI" )
{
    $auxiliar[2] = prompt("favor ingrese la base de la ventana");
    $auxiliar[3] = prompt("favor ingrese la base de la ventana");
    $RegistroSize[0] = $RegistroSize[0] -  ($auxiliar[2] * $auxiliar[3]);
}
$opcion = prompt("cuenta con puerta la pared # ?");
if( $opcion.toUpperCase() == "SI" )
{
    $auxiliar[4] = prompt("favor ingrese la base de la ventana");
    $auxiliar[5] = prompt("favor ingrese la base de la ventana");
    $RegistroSize[0] = $RegistroSize[0] -  ($auxiliar[4] * $auxiliar[5]);
}
*/

alert($auxiliar[0]+" "+$auxiliar[3]);


