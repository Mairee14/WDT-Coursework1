
// side bar js
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}
let map = null;




//Display countries Details

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;



  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {

      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: <span>${data[0].capital[0]}</span></h4>
                
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent: <span>${data[0].continents[0]}</span></h4>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: <span>${data[0].population}</span></h4>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: <span>${data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)[0]}</span></h4>   
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages: <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(", ")}</span</h4>
                
            </div>
        </div>
      `;

      fetchCityInfo(countryName, data[0].capital[0]);
       // add the call to the createMap function here
       const [lat, lng] = [data[0].latlng[0], data[0].latlng[1]];
       console.log([lat, lng]);

    // Call the createMap function with the lat and lng values
    createMap(lat, lng);
    })


    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });


});


function displayContent(list) {
  let listItem = "";
  list?.forEach(({ Cost, Value }) => {
    console.log(Cost, Value);
    listItem += `
	  <tr>
		<td>${Cost}</td>
		<td>${Value}</td>
	  </tr>
	  `;
  });
  return listItem;
}

const fetchCityInfo = async (country, city) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '24dbfe44c4msha0165c201d9d8b4p10f359jsn843b7d2bdb3a',
      'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
    }
  };
  try {
    const url = await fetch(`https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${country}&city=${city}`, options)

    const info = await url.json();

    
    console.log(info);
    const countryOutput = { ...Object.values(info) };

    // Create the chart using the data returned by the fetchCityInfo function
    createPieChart(
      ['Restaurants', 'Markets', 'Transportation', 'Utilities', 'Leisure', 'Finances', 'Childcare', 'Clothing', 'Rent'],
      [
        countryOutput[8].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[9].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[10].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[11].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[12].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[13].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[14].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[15].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
        countryOutput[16].reduce((acc, { Value }) => acc + parseFloat(Value), 0),
      ],
      `Expenses in ${countryOutput[2]}, ${countryOutput[1]}`
    );


    output.innerHTML = `
      <div class="table-responsive">
        <div class="countryOutput">
          <div>
          <h4 id="info">Country:</h4>
          <span>${countryOutput[1]}</span>
          </div>
  
          <div>
          <h4 id="info">City:</h4>
          <span>${countryOutput[2]}</span>
          </div>
  
          <div>
          <h4 id="info">Cost of Living Month total:</h4>
          <span>${countryOutput[3]}</span>
          </div>
  
          <div>
          <h4 id="info">Currency:</h4>
          <span>${countryOutput[4]}</span>
          </div>
  
          <div>
          <h4 id="info">Note:</h4>
          <span>${countryOutput[5]}</span>
          </div>
  
          <div>
          <h4>Resturant Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[8])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Market Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[9])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Transportation Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[10])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Utilities Per Month Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[11])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Sport and Leisure Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[12])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Salaries and Financing Prices </h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[13])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Childcare Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[14])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Clothing and Shoes Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[15])}
              </tbody>
            </table>
          </div>
  
          <div>
          <h4>Rent Per Month Prices</h4>
            <table class="table">
              <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              </thead>
              <tbody>
                ${displayContent(countryOutput[16])}
              </tbody>
            </table>
          </div>
  
        </div> 
  
  
        </div>
    `;


  }
  catch (err) {
    console.error(err)
  };


}

// Function to create a pie chart using Chart.js
function createPieChart(labels, values, chartTitle) {
  // Get the canvas element
  const canvas = document.getElementById('pie-chart');

  // Create the chart
  const chart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        label: chartTitle,
        data: values,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9900',
          '#663300',
          '#009900',
          '#990000',
          '#000099',
        ],
      }]
    },
    options: {
      title: {
        display: true,
        text: chartTitle,
        fontSize: 18,
        fontColor: '#333',
        padding: 20,
      },
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          padding: 10,
        },
      },
    },
  });
}

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

