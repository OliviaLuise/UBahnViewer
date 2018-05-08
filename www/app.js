console.log('app.js');
//GMAP (Fullscreen zeigt WIen)
var karte;
var initKarte = function() {
  var kartenoptionen = {
    center:{lat:48.2,lng:16.4},
    zoom:12
  }
karte = new google.maps.Map( $('#meineKarte').get(0), kartenoptionen  );



}; //init Karte

document.addEventListener('deviceready', function() {
    //erst jetzt ist app geladen und ready um was zu tun!
    console.log('device ready')
    $.ajax({
      url:'http://wifi.1av.at/527/ubahnen.php',
      method:'GET',
      dataType: 'JSON',
      success: function( ubahnen){
    //coordinaten vom OBJEKT AUSLESEN UND in neue Marker speichern
        //console.log(ubahnen);
        //console.log(ubahnen.U1.haltestellen[0].lat)
var U1Coordinates = [];
        for (var i in ubahnen.U1.haltestellen ){

          U1Coordinates.push(
          {lat: ubahnen.U1.haltestellen[i].lat, lng:ubahnen.U1.haltestellen[i].lng});

          //console.log(U1Coordinates)

        }//for loop

        var U1Path = new google.maps.Polyline({
          path: U1Coordinates,
          geodesic: true,
          strokeColor: '#E20613',
          strokeOpacity: 1,
          strokeWeight: 2,
        }); //Polyline

        //console.log(U1Path.path)
        U1Path.setMap(karte);

var U2Coordinates = [];
          for (var j in ubahnen.U2.haltestellen ){
        U2Coordinates.push(
        {lat: ubahnen.U2.haltestellen[j].lat, lng:ubahnen.U2.haltestellen[j].lng})
            }//for loop

          var U2Path = new google.maps.Polyline({
              path: U2Coordinates,
              geodesic: true,
              strokeColor: '#A762A3',
              strokeOpacity: 1,
              strokeWeight: 2,
                }); //Polyline


            U2Path.setMap(karte);

var U3Coordinates = [];
          for (var j in ubahnen.U3.haltestellen ){
                U3Coordinates.push(
                {lat: ubahnen.U3.haltestellen[j].lat, lng:ubahnen.U3.haltestellen[j].lng})
                      }//for loop

            var U3Path = new google.maps.Polyline({
                  path: U3Coordinates,
                  geodesic: true,
                  strokeColor: '#ee7d00',
                  strokeOpacity: 1,
                  strokeWeight: 2,
                        }); //Polyline


        U3Path.setMap(karte);

        var U4Coordinates = [];
                  for (var j in ubahnen.U4.haltestellen ){
                        U4Coordinates.push(
                        {lat: ubahnen.U4.haltestellen[j].lat, lng:ubahnen.U4.haltestellen[j].lng})
                              }//for loop

                    var U4Path = new google.maps.Polyline({
                          path: U4Coordinates,
                          geodesic: true,
                          strokeColor: '#009540',
                          strokeOpacity: 1,
                          strokeWeight: 2,
                                }); //Polyline


                U4Path.setMap(karte);

        var U6Coordinates = [];
                  for (var j in ubahnen.U6.haltestellen ){
                          U6Coordinates.push(
                          {lat: ubahnen.U6.haltestellen[j].lat, lng:ubahnen.U6.haltestellen[j].lng})
                                  }//for loop

                    var U6Path = new google.maps.Polyline({
                          path: U6Coordinates,
                          geodesic: true,
                          strokeColor: '#9d6930',
                          strokeOpacity: 1,
                          strokeWeight: 2,
                                }); //Polyline


                U6Path.setMap(karte);
      } // success

    });//ajax


  //U-Bahnen Haltestellen in GMAP lesen
  // Pfade zwischen U-Bahn Haltestellen in richtiger Farbe
  //Klicke auf Station > Info in Echtzeit

  //#e20613
  //#a762a3
  //#ee7d00
  //#009540
  //#9d6930

}); //device ready
