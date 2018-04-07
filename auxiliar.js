var $Size = new Array;
var $WallToPaint = 0;
var $SizeAux = 0;
var $RegistroSize = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $auxiliar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $operaciones = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var $opcion = "";
var $aceite = [13,240.50,432.35,1821.65];
var $agua = [10,150,250,999];
var $oleo = [12,386.85,663.25,3103.55];
var $presentacion = [1.89,3.785,18.925]; // 1/2, galon, cubeta
var $usuario = [0,0,0,0,0,0,0];
/*********Comienza peticion de datos pared***************** */

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
$RegistroSize[10] = $RegistroSize[10] +(  $auxiliar[0]-$auxiliar[1]-$auxiliar[2]);
alert($RegistroSize[10]);

/*********Termina peticion de datos***************** */

/*********Tipo pintura***************** */
$opcion = prompt("Que tipo de pintura utilizara? favor de escribir su seleccion Aceite/Agua/Oleo");
switch($opcion.toUpperCase())
{
    case "AGUA":
        $RegistroSize[0] = $RegistroSize[10]/$agua[0];
$RegistroSize[1] = Math.trunc($RegistroSize[0] / $presentacion[2]); //cuantas cubetas caben
$RegistroSize[2] = $RegistroSize[0] - ($presentacion[2] * $RegistroSize[1]); //cuantos galones me quedan.
$RegistroSize[3] = Math.trunc($RegistroSize[2] / $presentacion[1])
$RegistroSize[4] = $RegistroSize[2] - ($presentacion[1] * $RegistroSize[3]); //cuantos galones me quedan.
alert($RegistroSize[4]>=$presentacion[0]);
if($RegistroSize[4]>=$presentacion[0])
    {
        $RegistroSize[5] = $agua[2];
        $RegistroSize[6] = 1;
    }
    else
    {
        $RegistroSize[5] = $agua[1];
        $RegistroSize[6] = 0.5;
    }
$RegistroSize[7] = ($RegistroSize[1]*$agua[3])+($RegistroSize[3]*$agua[2])+$RegistroSize[5];
    break;
    case "ACEITE":
    $RegistroSize[0] = $RegistroSize[10]/$aceite[0];
    $RegistroSize[1] = Math.trunc($RegistroSize[0] / $presentacion[2]); //cuantas cubetas caben
    $RegistroSize[2] = $RegistroSize[0] - ($presentacion[2] * $RegistroSize[1]); //cuantos galones me quedan.
    $RegistroSize[3] = Math.trunc($RegistroSize[2] / $presentacion[1])
    $RegistroSize[4] = $RegistroSize[2] - ($presentacion[1] * $RegistroSize[3]); //cuantos galones me quedan.
    alert($RegistroSize[4]>=$presentacion[0]);
    if($RegistroSize[4]>=$presentacion[0])
        {
            $RegistroSize[5] = $aceite[2];
            $RegistroSize[6] = 1;
        }
        else
        {
            $RegistroSize[5] = $aceite[1];
            $RegistroSize[6] = 0.5;
        }
    $RegistroSize[7] = ($RegistroSize[1]*$aceite[3])+($RegistroSize[3]*$aceite[2])+$RegistroSize[5];
    break;
    case "OLEO":
    $RegistroSize[0] = $RegistroSize[10]/$oleo[0];
    $RegistroSize[1] = Math.trunc($RegistroSize[0] / $presentacion[2]); //cuantas cubetas caben
    $RegistroSize[2] = $RegistroSize[0] - ($presentacion[2] * $RegistroSize[1]); //cuantos galones me quedan.
    $RegistroSize[3] = Math.trunc($RegistroSize[2] / $presentacion[1])
    $RegistroSize[4] = $RegistroSize[2] - ($presentacion[1] * $RegistroSize[3]); //cuantos galones me quedan.
    alert($RegistroSize[4]>=$presentacion[0]);
    if($RegistroSize[4]>=$presentacion[0])
        {
            $RegistroSize[5] = $oleo[2];
            $RegistroSize[6] = 1;
        }
        else
        {
            $RegistroSize[5] = $oleo[1];
            $RegistroSize[6] = 0.5;
        }
    $RegistroSize[7] = ($RegistroSize[1]*$oleo[3])+($RegistroSize[3]*$oleo[2])+$RegistroSize[5];
    break;
    default:
        alert("no es un tipo de pintura validad")
    break;
}

alert("Metros Cuadrados: " + $RegistroSize[0]+"Cubetas : "+$RegistroSize[1] +" galones : "+$RegistroSize[3]+" extra: "+$RegistroSize[6]+" total: "+$RegistroSize[7]);


//<script src="FinalProyect.js"></script> 