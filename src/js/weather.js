var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    let lat = crd.latitude;
    let lon = crd.longitude;
    
    //const { lat, lon } = event.queryStringParameters;
    //const apikey = "43b8ea4c04fa407433a74cb5b1468e78";
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
 
    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;

    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
      console.log('data:', data)
      let city = data.name;
      city = city.replace("Eppendorf","Eimsbüttel");
      document.querySelector('#userloc').textContent = city;
      document.querySelector('#temperature').textContent = data.main.temp +" °C";
      console.log(data.weather[0]);
      let w = data.weather[0].main;
  
      document.querySelector('#sky').textContent = w;
    });
  }
  
  function error(err) {
    console.log("Fehler " + err.code)
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  



 
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
