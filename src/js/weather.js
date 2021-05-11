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
    const wkey  = "12ade889ac57240102f7d2709c9a3d38"
    //const { lat, lon } = event.queryStringParameters;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${wkey}&units=metric`;

    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
      console.log('data:', data)
      document.querySelector('#userloc').textContent = data.name;
      document.querySelector('#temperature').textContent = data.main.temp +" °C";
      console.log(data.weather[0]);
      let w = data.weather[0].main;
      console.log(w);
      document.querySelector('#sky').textContent = w;
    });
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  



 
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
