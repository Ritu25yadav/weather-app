let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let img = document.querySelector("img");
let weatherdisplay = document.querySelector(".weather_display_div")

form.addEventListener("submit" ,  weatherfunc);
 async function weatherfunc(e){
    e.preventDefault()
    
    let res = await fetch(`http://api.weatherstack.com/current?access_key=52b0d232fbcbe155b6aadc2d9ef83a3c&query=${input.value}`)
    let data = await res.json()
    
    let error = data.success

    if(error === false){
        window.alert("Enter correct City")
    }else{
    let temperature = data.current.temperature;
    let cityName = data.location.name;
    let weathericon = data.current.weather_icons;
    let description = data.current.weather_descriptions;
    // let time = data.current.observation_time;
    h1.innerText = `${temperature}°C`;
    h2.innerText = cityName;
    // h3.innerText = time;
    p.innerText = description;
    img.setAttribute("src",  weathericon)


    if(temperature > 30){
        weatherdisplay.style.backgroundImage = "url('sunny.jpg')";
    }else if(temperature > 20){
        weatherdisplay.style.backgroundImage = "url('flower-img.jpg')"
    }
    else if(temperature > 10){
        weatherdisplay.style.backgroundImage = "url('cloud.jpg')";
    }
    else{
        weatherdisplay.style.backgroundImage = "url('winter.jpg')"
    }

    }
    
    form.reset();


   console.log(data);

}