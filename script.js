var firstName =  document.getElementById('yourName');
var secondName = document.getElementById('partnersName');
var lovePercent = document.getElementById('result')

function love(){
    let yourName = prompt("Enter your name ");
    let loveName = prompt("Enter your Aashiq name");
    let body = document.querySelector('body');
    let randNo = Math.random();
    randNo = Math.floor((randNo * 100)+1);
    let percent = randNo + "%";
    firstName.innerHTML = yourName;
    secondName.innerHTML = loveName;
    lovePercent.innerHTML = percent;

    if( randNo < 60){
        lovePercent.style.color = "#ffa1a1";
    }
    else{
        lovePercent.style.color = "rgb(144 255 117)";
    }
}

love();
