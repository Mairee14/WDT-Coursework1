// Define the API URL and key
// Get references to the HTML elements
const city1Input = document.getElementById('city1');
const city2Input = document.getElementById('city2');
const searchCity = document.getElementById('searchCity');
const resultDiv = document.getElementById('result');

function displayContent(list){
	let listItem = "";
	list?.forEach(({Cost, Value}) => {
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
  

compareBtn.addEventListener("click", async (e) =>{
	e.preventDefault();
	
	// Get the values of the input fields
	const country1 = city1Input.value.toLowerCase().split(",")[1];
	const city1 = city1Input.value.toLowerCase().split(",")[0];
	const country2 = city2Input.value.toLowerCase().split(",")[1];
	const city2 = city2Input.value.toLowerCase().split(",")[0];
	

	let city1Info = await fetchCityInfo(city1, country1);
	let city2Info = await fetchCityInfo(city2, country2);
	console.log(city1Info);
	console.log(city2Info);

	const inputOne = {...Object.values(city1Info)};
	const inputTwo = {...Object.values(city2Info)};

	resultDiv.innerHTML = `
		<div class="cityinfo">
			<div class="inputone">
				<div>
				<h4>Country:</h4>
				<span>${inputOne[1]}</span>
				</div>

				<div>
				<h4>City:</h4>
				<span>${inputOne[2]}</span>
				</div>

				<div>
				<h4>Cost of Living Month total:</h4>
				<span>${inputOne[3]}</span>
				</div>

				<div>
				<h4>Currency:</h4>
				<span>${inputOne[4]}</span>
				</div>

				<div>
				<h4>Note:</h4>
				<span>${inputOne[5]}</span>
				</div>

				<div>
				<h4>Resturant Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[8])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Market Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[9])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Transportation Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[10])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Utilities Per Month Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[11])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Sport and Leisure Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[12])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Salaries and Financing Prices </h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[13])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Childcare Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[14])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Clothing and Shoes Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[15])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Rent Per Month Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputOne[16])}
						</tbody>
					</table>
				</div>

			</div>

			<div class="inputtwo">
				<div>
				<h4>Country</h4>
				<span>${inputTwo[1]}</span>
				</div>

				<div>
				<h4>Capital</h4>
				<span>${inputTwo[2]}</span>
				</div>

				<div>
				<h4>Country</h4>
				<span>${inputTwo[3]}</span>
				</div>

				<div>
				<h4>Capital</h4>
				<span>${inputTwo[4]}</span>
				</div>

				<div>
				<h4>Capital</h4>
				<span>${inputTwo[5]}</span>
				</div>

				<div>
				<h4>Resturant Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[8])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Market Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[9])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Transportation Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[10])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Utilities Per Month Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[11])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Sport and Leisure Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[12])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Salaries and Financing Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[13])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Childcare Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[14])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Clothing and Shoes Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[15])}
						</tbody>
					</table>
				</div>

				<div>
				<h4>Rent Per Month Prices</h4>
					<table>
						<thead>
						<tr>
							<th>Item</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
							${displayContent(inputTwo[16])}
						</tbody>
					</table>
				</div> 


			</div>
		</div>
	`;

	console.log(inputOne[8]);
	console.log(inputTwo);
});

const fetchCityInfo = async(city, country) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '24dbfe44c4msha0165c201d9d8b4p10f359jsn843b7d2bdb3a',
			'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
		}
	};
	try{
		const url = await fetch(`https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${country}&city=${city}`, options)
		
		const info = await url.json();

		return info;
		
	}catch(err) {
		console.error(err)
	};
	
		
}
