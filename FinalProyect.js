var $Size = new Array;
var $WallToPaint = 0;
var $SizeAux = 0;
var $RegistroSize = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $auxiliar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $operaciones = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $opcion = "";
$RegistoSize = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
$WallToPaint =  parseFloat(prompt("Cromatic Paint \n Cuantas paredes desea pintar?"));
$Size = prompt ("Favor ingrese la base y la altura de la pared # en el formato Base,Altura Ejem. 5,2");
$operaciones[0] = $Size.substring(0, $Size.indexOf(","));
$operaciones[1] = $Size.substring($Size.indexOf(",")+1,$Size.length);
$auxiliar[0] =  parseFloat($operaciones[0]) * parseFloat($operaciones[1]);
$opcion = prompt("La Pared # , Tiene ventana?");
    if($opcion.toUpperCase() == "SI")
    {
        $Size = prompt("Favor ingrese la base y la altura de la ventana, en el formato base,altura, Ejem. 1.5,1");
        $operaciones[2] = $Size.substring(0, $Size.indexOf(","));
        $operaciones[3] = $Size.substring($Size.indexOf(",")+1,$Size.length);
        $auxiliar[1] =  parseFloat($operaciones[2]) * parseFloat($operaciones[3]);
    }
$opcion = prompt("La Pared # , Tiene puertas?");
    if($opcion.toUpperCase() == "SI")
    {
        $Size = prompt("Favor ingrese la base y la altura de la puerta, en el formato base,altura, Ejem. 1.5,1");
        $operaciones[4] = $Size.substring(0, $Size.indexOf(","));
        $operaciones[5] = $Size.substring($Size.indexOf(",")+1,$Size.length);
        $auxiliar[2] =  parseFloat($operaciones[4]) * parseFloat($operaciones[5]);
    }
$RegistroSize = $auxiliar[0]-$auxiliar[1]-$auxiliar[2];
alert($RegistroSize);


