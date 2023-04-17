// JavaScript
function createMap(lat, lng) {
    if (map) {
      map.remove();
    }
    // Create the map and set the initial view
    map = L.map('mapid').setView([lat, lng], 4);
  
    // Add the OpenStreetMap tiles layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 25,
    }).addTo(map);
  
    // Add the marker to the map
    const marker = L.marker([lat, lng]).addTo(map);
  }
  
  