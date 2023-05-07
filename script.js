var firstName =  document.getElementById('yourName');
var secondName = document.getElementById('partnersName');
var lovePercent = document.getElementById('result')

function love(){
    let yourName = prompt("Enter your name ");
    let loveName = prompt("Enter your Aashiq name");
    let body = document.querySelector('body');
    let randNo = Math.random();
    randNo = Math.floor(randNo * 100);
    let percent = randNo + "%";
    firstName.innerHTML = yourName;
    secondName.innerHTML = loveName;
    lovePercent.innerHTML = percent;

    if( randNo < 70){
        body.style.background = "#ffa1a1";
    }
}

love();
