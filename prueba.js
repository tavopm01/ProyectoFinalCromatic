var $RegistroSize = [0,0,0,0,0,0,0];
var $opcion = "";
var $aceite = [13,240.50,432.35,1821.65];
var $agua = [10,150,250,999];
var $oleo = [12,386.85,663.25,3103.55];
var $presentacion = [1.89,3.785,18,925];

$RegistroSize[0] = 12;
$opcion = prompt("Que tipo de pintura utilizara? favor de escribir su seleccion Aceite/Agua/Oleo");
switch($opcion.toUpperCase())
{
    case "AGUA":
        $RegistroSize[1] = $RegistroSize[0] / $agua[0];
        if($RegistroSize[1] <= $presentacion[0])
        {
            $RegistroSize[2] = $agua[1];
        }
    break;
    case "ACEITE":
        $RegistroSize[1] = $RegistroSize[0] / $aceite[0];
        if($RegistroSize[1] <= $presentacion[0])
        {
            $RegistroSize[2] = $aceite[1];
        }
    break;
    case "OLEO":
        $RegistroSize[1] = $RegistroSize[0] / $oleo[0];
        if($RegistroSize[1] <= $presentacion[0])
        {
            $RegistroSize[2] = $oleo[1];
        }
    break;
    default:
        alert("no es un tipo de pintura validad")
    break;
}
alert($RegistroSize)