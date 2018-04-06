var $presentacion = [1.89,3.785,18.925];
var $aceite = [13,240.50,432.35,1821.65];
var $RegistroSize = new Array;


$RegistroSize[0] =  39 //galones
$RegistroSize[1] = Math.trunc($RegistroSize[0] / $presentacion[2]); //cuantas cubetas caben
$RegistroSize[2] = $RegistroSize[0] - ($presentacion[2] * $RegistroSize[1]); //cuantos galones me quedan.

$RegistroSize[3] = Math.trunc($RegistroSize[2] / $presentacion[1])
$RegistroSize[4] = $RegistroSize[2] - ($presentacion[1] * $RegistroSize[3]); //cuantos galones me quedan.
if(($RegistroSize[4]<=$presentacion[1])&&($RegistroSize[4]>$presentacion[0]))
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

alert("Cubetas : "+$RegistroSize[1] +" galones : "+$RegistroSize[3]+" extra: "+$RegistroSize[6]+" total: "+$RegistroSize[7]);

