let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')


const formatNum =(num)=>{
    return num < 10
    ? `0${num}`
    : num
}

let taim = setInterval(() => {


    let date = new Date()
    let deadline = new Date(2024, 2, 3, -7, -57)
    let different = deadline.getTime() - date.getTime()

    if(different <= 0){
        clearInterval(taim)
        alert('С днём рождения!')
        // const h1 = document.querySelector("h1")
        // h1.innerText=('С днём рождения!')
    }

    days.textContent = formatNum(Math.floor(different / 1000 / 60 / 60 / 24))
    hours.textContent = formatNum(Math.floor((different / 1000 / 60 / 60) % 24))
    minutes.textContent = formatNum(Math.floor((different / 1000 / 60) % 60))
    seconds.textContent = formatNum(Math.floor((different / 1000) % 60))


    
    
}, 1000)