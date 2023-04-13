let SearchCountry = document.getElementById("country-inp");
const displayOptions = document.getElementById("displayoptions");
displayOptions.classList.add("d-none");

function countryName(list, filter) {
    displayOptions.innerHTML = "";
    const filterData = list.filter(selectCountry => selectCountry.name.common.toLowerCase().startsWith(filter));

    filterData.forEach((selectCountry) => {
        const option = document.createElement("option");
        option.value = selectCountry.name.common;
        option.text = selectCountry.name.common;
        displayOptions.appendChild(option);
    });
}

displayOptions.addEventListener("click", () => {
    SearchCountry.value = displayOptions.value;
})

SearchCountry.addEventListener("keyup", (e) => {
    e.preventDefault();

    const filter = e.target.value.toLowerCase();
    if (filter === "") {
        displayOptions.classList.add("d-none");
    } else {
        displayOptions.classList.remove("d-none");

        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = Object.values(data);
                countryName(countryList, filter);
            })
            .catch(error => console.log(error));
    }

});


