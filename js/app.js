
var select = document.querySelector('#ciudad');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var key = '645bfc2b76558f7473cc6547a72ae582';
var time = document.querySelector('.time');
var lon = document.querySelector('.lon');
var lat = document.querySelector('.lat');
var pais = document.querySelector('.pais');


select.addEventListener('change', function(capital) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + select.value + '&appid=' + key)
        .then(response => response.json())
        .then(data => {

            var tempValue = data['main']['temp'] - 273.15;
            var nameValue = data.name;
            var descValue = data['weather'][0]['description'];
            var timeValue = data['timezone'];
            var lonValue = data['coord']['lon'];
            var latValue = data['coord']['lat'];
            

            latitud = data.coord.lat
            longitud = data.coord.lon 


            main.innerHTML = nameValue;
            desc.innerHTML = "Descripcion - " + descValue;
            temp.innerHTML = "Temperatura - " + tempValue.toFixed(2) + "°C";
            time.innerHTML = "Timezone - " + timeValue;
            lon.innerHTML = "longitud - " + lonValue;
            lat.innerHTML = "latitud - " + latValue;
            


            iniciarMap();

        }
    )

})


function iniciarMap() {
var coord = { lat: 4.599321568464183, lng: -74.09858420506947 };
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: coord
});
var marker = new google.maps.Marker({
position: coord,
map: map
});
}


latitud = 4.599321568464183
longitud = -74.09858420506947

function iniciarMap() {
var coord = { lat: latitud, lng: longitud };
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: coord
});
var marker = new google.maps.Marker({
position: coord,
map: map
});
}

var contenido = document.querySelector('#contenido')
        function traer() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results['0'])
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                <p>Email: ${data.results['0'].email}</p>
                <p>Celular: ${data.results['0'].cell}</p>
                <p>Genero: ${data.results['0'].gender}</p>
                <p>Ciudad: ${data.results['0'].location.name}</p>
                `
            })
        } 