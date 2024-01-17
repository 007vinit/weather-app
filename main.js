

function showWeather() {
    let c = InputCity.value;
    console.log(c)
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=c705a13f423cb938a629f035e04aff6c&
q=${c}&units=metric`).then(
        r => {
            if (r.ok) {
                return r.json()
            } else {
                alert("something is wron!!!")
            }
        }
    ).then(
        (d) => {
            let name = d.name;
            let temp = d.main.temp;
            let description = d.weather[0].description;
            let windSpeed = d.wind.speed;
            cityName.innerHTML = name;
            tempHTML.innerHTML = temp;
            desc.innerHTML = description;
            speed.innerHTML = windSpeed;
        }
    )
}





// Search only Delhi
// fetch(`https://api.openweathermap.org/data/2.5/weather?appid=c705a13f423cb938a629f035e04aff6c&
// q=delhi&units=metric`).then(
//     r=>{
//         if(r.ok){
//             return r.json()
//         }else{
//             alert("something is wron!!!")
//         }
//     }
// ).then(
//     (d) => {
//         let name=d.name;
//         let temp=d.main.temp;
//         let description=d.weather[0].description;
//         let windSpeed=d.wind.speed;
//         cityName.innerHTML=name;
//         tempHTML.innerHTML=temp;
//         desc.innerHTML=description;
//         speed.innerHTML=windSpeed;
//     }
// )