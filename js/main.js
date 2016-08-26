
// Based on code by Ian Devlin
// http://html5doctor.com/finding-your-position-with-geolocation/

document.addEventListener("DOMContentLoaded", determineLocation);

function determineLocation(event)
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      handlePosition, 
      displayError,
      {
        enableHighAccuracy: true,
        timeout: 60000, // ms
        maximumAge: 10000 // ms
      }
    );
    $( "#locationstatus" ).html( "<div>Paikannetaan...</div>" );  
  }
  else {
    $( "#locationstatus" ).html( "Fail: ei tukea" );
    console.log("navigator.geolocation not supported");

  }

  function handlePosition(position) {
    if (position.coords.accuracy > 100)
    {
      $( "#locationstatus" ).html("Epätarkka " + position.coords.accuracy + " m");
    }
    else
    {
      // ABBA
    }

/*
    logData.accuracy = position.coords.accuracy;
    logData.altitude = position.coords.altitude;
    logData.altitudeAccuracy = position.coords.altitudeAccuracy;
    logData.latitude = position.coords.latitude;
    logData.longitude = position.coords.longitude;
*/
    // DO THE MAGIC

    );

    console.log(position);
  }

  function updatePage(data)
  {
      console.log(data);
      console.log("Success!");

/*
      $( "#error-container" ).html("");
      $( "#main-container" ).load( "allspecies.php?grid=" + data.N + ":" + data.E );
*/
  }

  function displayError(error) {
    var errors = { 
      1: 'Ei oikeutta.',
      2: 'Ei saatavissa.',
      3: 'Aikakatkaisu.'
    };
    console.log(errors[error.code]);
    $( "#locationstatus" ).html("Fail: " + errors[error.code]);
  }

  /*
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
  */
}


