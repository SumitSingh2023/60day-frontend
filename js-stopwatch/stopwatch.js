let timer = false
//let interval;
let milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;


function start() {

    if (!timer) {
        timer = true;
        setInterval(() => {
            stopwatchRun()
        }, 10)

    }
}

function pause() {
    timer = false
}

function reset() {

    timer = false
    milisec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay()
    
}

function stopwatchRun() {
    if (timer == true) {
        milisec += 1

        if (milisec == 95) {
            sec += 1
            milisec = 0
        }
        if (sec == 60) {
            min += 1
            sec = 0
        }
        if (min == 60) {
            hr += 1
            min = 0
        }
    }
    
    updateDisplay()
}



// function updateDisplay() {
//     if (min == 0 && hr == 0) {
//         document.getElementById("min").innerHTML = "";
//         document.getElementById("hr").innerHTML = ""
//     } else {
//         document.getElementById("milisec").innerHTML = milisec < 10 ? "0" + milisec : milisec
//         document.getElementById("sec").innerHTML = sec < 10 ? "0" + sec : sec
//         document.getElementById("min").innerHTML = min < 10 ? "0" + min : min;
//         document.getElementById("hr").innerHTML = hr < 10 ? "0" + hr : hr

//     }
// }

function updateDisplay() {
    document.getElementById("milisec").innerHTML = milisec < 10 ? "0" + milisec : milisec
    document.getElementById("sec").innerHTML = sec < 10 ? "0" + sec : sec
    
    if (min > 0) {
        document.getElementById("min").innerHTML = min < 10 ? "0" + min : min;
    } else {
        document.getElementById("min").innerHTML = "";
        setTimeout(()=>{
            document.getElementById("min").style.display="block"
            document.getElementById("dot2").style.display="block"
        },55000)
    }

    if (hr > 0) {
        document.getElementById("hr").innerHTML = hr < 10 ? "0" + hr : hr;
    } else {
        document.getElementById("hr").innerHTML = "";
        setTimeout(()=>{
            document.getElementById("hr").style.display="block"
            document.getElementById("dot1").style.display="block"
        },550000)
        
    }
}




