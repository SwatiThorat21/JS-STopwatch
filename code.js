let hr = 0;
let min = 0;
let sec = 0;
let timer = false;

let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

startbtn.addEventListener('click',startbtn_click);
function startbtn_click(){
timer = true;
stopwatch();

};

stopbtn.addEventListener('click',stopbtn_click);
function stopbtn_click(){
    timer = false;

};

resetbtn.addEventListener('click',resetbtn_click);
function resetbtn_click(){
    timer = false;
    
};

function stopwatch(){

    setTimeout("stopwatch()", 1000);

}
