<?php
header('Content-Type: text/html; charset=utf-8');

$date = date("d.m.Y");
$time = date("H.i");
?>

<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Havistin</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/app.css">


        <!--[if lt IE 9]>
            <script src="js/vendor/html5-3.6-respond-1.4.2.min.js"></script>
        <![endif]-->
    </head>
    <body>

        <div id="header-container">
            <header class="wrapper clearfix">
                <h2 class="title">
                    Havistin
                </h2>
            </header>
        </div>



        <div id="main-container">
            <div id="savestatus">Ei tallennettu</div>
            <div id="locationstatus"></div>
            <div id="location-button">Get this location</div>
            <div id="observationForm">
                PVM: <input type="text" name="date" id="date" value="<?php echo $date; ?>"><br>
                Aika: <input type="text" name="time" id="time" value="<?php echo $time; ?>"><br>
                Laji: <input type="text" name="species" id="species"></input><br>
                Määrä: <input type="text" name="count" id="count"></input><br>
                Lisätieto: <input type="text" name="notes" id="notes"></input><br>
            </div>
            <div id="newobservation-button"><a href="./">Make a new observation</a></div>
        </div> <!-- #main-container -->

        <footer class="wrapper">
        </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="js/main.js"></script>

    </body>
</html>
