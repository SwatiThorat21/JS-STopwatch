let hr = 0;
let min = 0;
let sec = 0;
let timer = false;

let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

startbtn.addEventListener('click', startbtn_click);
function startbtn_click() {
    timer = true;
    stopWatch();
};

stopbtn.addEventListener('click', stopbtn_click);
function stopbtn_click() {
    timer = false;
};

resetbtn.addEventListener('click', resetbtn_click);
function resetbtn_click() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";

};

function stopWatch() {
    if (timer == true) {
        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;

        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString;
        }
        if(sec<10){
            secString = "0" + secString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;

        setTimeout("stopWatch()", 1000);
    }

}





