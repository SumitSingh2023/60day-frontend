let totalSecond;
let timer;

function start() {
    if(!timer){
        totalSecond =
        Number(document.getElementById('hour').value) * 3600 +
        Number(document.getElementById('minute').value) * 60 +
        Number(document.getElementById('second').value)
    if (totalSecond <= 0) {
        alert("Please enter time")
        return
    }
    timer = setInterval(updateTimer, 1000)

    }
    
}

function updateTimer() {
    if (totalSecond < 0) {
        clearInterval(timer)
        alert("Time Up")
        return
    }

    let hours = Math.floor(totalSecond / 3600)
    let minute = Math.floor(totalSecond % 3600 / 60)
    let seconds = totalSecond % 60

    document.getElementById('hour').value = hours
    document.getElementById('minute').value = minute
    document.getElementById('second').value = seconds

    totalSecond--
}

function pause() {
    clearInterval(timer)
}


function reset() {
    clearInterval(timer)
    document.getElementById('hour').value = 0
    document.getElementById('minute').value = 0
    document.getElementById('second').value = 0
}