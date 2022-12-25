


//below is to fetch data for shangai:
const getShangai = (city) => {
    cityShangai.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            shangaicloud_pct.innerHTML = response.cloud_pct
            shangaitemp.innerHTML = response.temp
            shangaifeels_like.innerHTML = response.feels_like
            shangaihumidity.innerHTML = response.humidity
            shangaimin_temp.innerHTML = response.min_temp
            shangaimax_temp.innerHTML = response.max_temp
            shangaiwind_speed.innerHTML = response.wind_speed
            shangaiwind_degrees.innerHTML = response.wind_degrees
            shangaisunrise.innerHTML = response.sunrise
            shangaisunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}
getShangai("Shangai")

//below is to fetch data for boston:
const getBoston = (city) => {
    cityBoston.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            bostoncloud_pct.innerHTML = response.cloud_pct
            bostontemp.innerHTML = response.temp
            bostonfeels_like.innerHTML = response.feels_like
            bostonhumidity.innerHTML = response.humidity
            bostonmin_temp.innerHTML = response.min_temp
            bostonmax_temp.innerHTML = response.max_temp
            bostonwind_speed.innerHTML = response.wind_speed
            bostonwind_degrees.innerHTML = response.wind_degrees
            bostonsunrise.innerHTML = response.sunrise
            bostonsunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}
getBoston("Boston")

//below is to fetch data for lucknow:
const getLucknow = (city) => {
    cityLucknow.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            lucknowcloud_pct.innerHTML = response.cloud_pct
            lucknowtemp.innerHTML = response.temp
            lucknowfeels_like.innerHTML = response.feels_like
            lucknowhumidity.innerHTML = response.humidity
            lucknowmin_temp.innerHTML = response.min_temp
            lucknowmax_temp.innerHTML = response.max_temp
            lucknowwind_speed.innerHTML = response.wind_speed
            lucknowwind_degrees.innerHTML = response.wind_degrees
            lucknowsunrise.innerHTML = response.sunrise
            lucknowsunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}
getLucknow("Lucknow")

//below is to fetch data for Kolkata:
const getKolkata = (city) => {
    cityKolkata.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            kolkatacloud_pct.innerHTML = response.cloud_pct
            kolkatatemp.innerHTML = response.temp
            kolkatafeels_like.innerHTML = response.feels_like
            kolkatahumidity.innerHTML = response.humidity
            kolkatamin_temp.innerHTML = response.min_temp
            kolkatamax_temp.innerHTML = response.max_temp
            kolkatawind_speed.innerHTML = response.wind_speed
            kolkatawind_degrees.innerHTML = response.wind_degrees
            kolkatasunrise.innerHTML = response.sunrise
            kolkatasunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}
getKolkata("Kolkata")
