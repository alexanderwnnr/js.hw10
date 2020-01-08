let i = 5
let timer = setInterval(() => {
    console.log(i)
    if (i === 1) {
        setTimeout(() => console.log("Start"), 1000)
        clearInterval(timer)
    }
    i--
}, 1000)