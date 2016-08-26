<?php

$dataDirty = Array();

foreach ($_GET as $key => $value)
{
    $dataDirty[$key] = $value;
}

$id = "http://tun.fi/JA.123"; // dummy

$filename = "data/" . sha1($id) . ".json";

file_put_contents($filename, json_encode($dataDirty));

echo "ok";

