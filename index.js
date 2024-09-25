fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});


// fetch("https://api.sportradar.com/golf/trial/v3/en/players/wgr/2024/rankings.json")
//     .then(res => res.json())
//     .then(data => console.log(data))


//this one works!!!!

// const options = {method: 'GET', headers: {accept: 'application/json', 'X-RapidAPI-Key': 'dc9e881324msha2e8b1b05eee38dp173535jsn61bfe5f13cf7',
// 	'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'}};

// fetch('https://golf-leaderboard-data.p.rapidapi.com/projected-rankings-pga/2022', options)
//   .then(response => response.json())
//   .then(response => console.log(response.results.rankings[0].first_name))
//   .catch(err => console.error(err));


// const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings';
// const options = {
// 	method: 'GET',
// 	headers: {
//         "Content-Type": "application/json",
// 		'X-RapidAPI-Key': 'dc9e881324msha2e8b1b05eee38dp173535jsn61bfe5f13cf7',
// 		'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
//     }
    

// };

// try {
// 	const response = fetch(url, options);
// 	const result = response;
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//https://rapidapi.com/hub