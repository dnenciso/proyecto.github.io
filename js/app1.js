
const listapaises = document.getElementById("pais");
let countries; 

listapaises.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/region/americas")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";

    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);

    listapaises.innerHTML = options;

    listapaises.selectedIndex = Math.floor(Math.random() * listapaises.length);
    displayCountryInfo(listapaises[listapaises.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    document.querySelector("#flag-container img").src = countryData.flag;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
}