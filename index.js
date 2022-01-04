fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=forest")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `Image By: ${data.user.name}`
    })
    .catch(err=>{
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
            )`;
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res =>{
        if(!res.ok){
            throw Error ("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src="${data.image.small}"/>
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#parameters//

function getCurrentTime() {
    const date = new Date()
    document.querySelector(".time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)


//https://openweathermap.org/current#geo
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position//
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

navigator.geolocation.getCurrentPosition(position =>
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
            .then(res => {
                if(!res.ok){
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => console.log(data))
    )
