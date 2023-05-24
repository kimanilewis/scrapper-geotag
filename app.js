
let map;
let markers = [];

// Read country networks from JSON files
const fs = require('fs');

// Read country networks from JSON file
function readCountryNetworksFromFile(filePath) {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const countryNetworks = JSON.parse(jsonData);
  return countryNetworks;
}

// Read country networks from a single JSON file
function getCountryNetworks() {
  const filePath = './scrapper/mcc_mnc_data.json';
  const countryNetworks = readCountryNetworksFromFile(filePath);
  return countryNetworks;
}

// Usage example
const countryNetworks = getCountryNetworks();
console.log(countryNetworks);

// Initialize the map
function initMap() {
  const africaCenter = { lat: -1.9403, lng: 18.7105 }; 
  map = new google.maps.Map(document.getElementById('map'), {
    center: africaCenter,
    zoom: 5
  });

  // Read country networks from JSON files
  const countriesNetworks = getCountriesNetworks();

  // Create markers for each country
  countriesNetworks.forEach((countryNetworks) => {
    const countryName = countryNetworks.country;
    const networks = countryNetworks.networks;

    const countryMarker = new google.maps.Marker({
      position: { lat:-1.9403, 
                  lng: 18.7105
                },
      map: map,
      title: countryName
    });

    countryMarker.addListener('mouseover', () => {
      showNetworks(countryName, networks);
    });

    // Add listener for click event
    countryMarker.addListener('click', () => {
      showNetworks(countryName, networks);
    });

    markers.push(countryMarker);
  });
}

// Display networks for a specific country
function showNetworks(countryName, networks) {
  console.log(`Networks for ${countryName}:`, networks);
}
