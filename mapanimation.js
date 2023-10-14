// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [76.95575681667191,11.01716704182396],
    [76.99346810657333,10.996746550766094],
    [77.03004870375855,10.999949377783464],
    [77.04650444272166,11.001960697615326],
    [77.0892481230301,11.022349260202605],
    [77.11917202432905,11.02496707107336],
    [77.12474796572924,11.02511839910077],
    [77.12949161336954,11.028684856836978],
    [77.13370750668581,11.026338421282546],
  ];
  
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [76.95575681667191,11.01716704182396],
    zoom: 14,
  });
  
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker= new mapboxgl.Marker()
              .setLngLat([76.95575681667191,11.01716704182396])
              .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(()=> {
      if (counter>=busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      },1000);
  }
  
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  