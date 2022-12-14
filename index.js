//dom elements
const time =document.getElementById('time'),
greeting = document.getElementById('greetings'),
name = document.getElementById('name'),
goal = document.getElementById('goal');

const showAmPm=true;

//show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set am or pm
    const ampm = hour >= 12? 'PM' : 'AM' ;
    //12hr format
    hour = hour % 12 || 12;
    //output
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm:''}`;

    setTimeout(showTime,1000);
}

//add zero
function addZero(n) {
    return (parseInt(n, 10)<10?'0':'') +n;
}

//set background
function setBgGreet(){
    let today = new Date();
    let hour=today.getHours();

    if(hour<12){
        //morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        greeting.textContent = 'Good morning';
    }else if(hour<18){
        //afternon
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
        greeting.textContent = 'Good afternoon';
    }else{
        //evening
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        greeting.textContent = 'Good night';
        document.body.style.color='white';
    }
}



//get name
function getName(){
    if(localStorage.getItem('name')=== null) {
        name.textContent = "[enter name]";
    }else{
        name.textContent=localStorage.getItem('name');
    }
}

//set name
function setName(e){
    if(e.type==='keypress'){
        //make sure enter is pressed
        if(e.which==13|| e.keyCode==13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name',e.target.innerText);

    }
}

//get goal
function getGoal(){
    if(localStorage.getItem('goal')=== null) {
        goal.textContent = '[enter goal]';
    }else{
        goal.textContent=localStorage.getItem('goal');
    }
}

//set goal
function setGoal(e){
    if(e.type==='keypress'){
        //make sure enter is pressed
        if(e.which==13|| e.keyCode==13){
            localStorage.setItem('goal',e.target.innerText);
            goal.blur();
        }
    }else{
        localStorage.setItem('goal',e.target.innerText);

    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

//run
showTime();
setBgGreet();
getName();
getGoal();