
// Based on code by Ian Devlin
// http://html5doctor.com/finding-your-position-with-geolocation/

var locationData;
var lastResponse;
var id = "";

$( "#pseudoedit" ).click(function() {
  saveData();
});

// Todo: vaihda klikkiin reagoivaksi
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
      $( "#locationstatus" ).html("Tarkka " + position.coords.accuracy + " m");
    }

/*
    logData.accuracy = position.coords.accuracy;
    logData.altitude = position.coords.altitude;
    logData.altitudeAccuracy = position.coords.altitudeAccuracy;
    logData.latitude = position.coords.latitude;
    logData.longitude = position.coords.longitude;
*/
    // Set the location data to a variable for later use
    locationData = position;
    saveData();

    console.log(position);
  }

  function displayError(error) {
    var errors = { 
      1: 'Ei oikeutta.',
      2: 'Ei saatavissa.',
      3: 'Aikakatkaisu.'
    };
    console.log(errors[error.code]);
    $( "#locationstatus" ).html("Fail: " + errors[error.code]);

    /*
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    */
  }

} // determine location

function saveData()
{
  $( "#savestatus" ).html( "Tallentaa..." );
  console.log("saveData triggered: " + locationData);

  // Combine location, id and form data to an object
  // location:
  var dataToPost = locationData;
  // id:
  dataToPost.id = id;
  // form:
  dataToPost.species = $( "#species" ).val();
  dataToPost.count = $( "#count" ).val();
  dataToPost.notes = $( "#notes" ).val();

  // Post the data
  var url = "api/";
  var posting = $.post( url, locationData );

  posting.done( function( response ) {
    // Take id from response
    id = response;

    $( "#savestatus" ).html( "Tallennettu" );
    console.log("Response: " + response);
  });
}


