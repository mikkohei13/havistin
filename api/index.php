<?php
header('Content-Type: application/json; charset=utf-8');

$dataDirty = Array();

foreach ($_POST as $key => $value)
{
    $dataDirty[$key] = $value;
}

// Todo: Take the object id from post, if exists
if (isset($dataDirty['id']))
{
	$uriId = $dataDirty['id'];
}
else
{
	$objectId = "HAVISTIN-" . rand(100000, 999999);
	$uriId = "http://tun.fi/JA." . $objectId; // dummy
}

$filename = "data/" . sha1($uriId) . ".json";

file_put_contents($filename, json_encode($dataDirty));

$response['code'] = "ok";
$response['id'] = $uriId;

$jsonResponse = json_encode($response);
echo $jsonResponse;
