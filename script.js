//imports
import 
{ 
    Player
} from "./player.js";
import
{
    steveFight,
    steve
} from "./fight.js";
import
{
    Mega
} from "./playMusic.js";
//exports
export
{
    player1,
    displayScreen,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6
};
//elements
const body = document.querySelector("body");
const displayScreen = document.querySelector(".display-screen");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const nextBtn = document.querySelector("#next");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
let playerName = document.createElement("input");
let playerAge = document.createElement("input");
let askName = document.createElement("h2");
let askAge = document.createElement("h2");
let nextButton = document.createElement("button");
let nextButton2 = document.createElement("button");
let player1 = new Player(playerName, 100);
let check = 0

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
nextButton.setAttribute("class", "button");
nextButton2.setAttribute("class", "button");
playerAge.setAttribute("type", "number");

function start()
{
    startBtn.removeEventListener("click", start);
    nextButton.addEventListener("click", removeChildren);
    displayScreen.appendChild(askName);
    displayScreen.appendChild(playerName);
    displayScreen.appendChild(nextButton);
    askName.innerText = "What is your name?";
    nextButton.innerText = "Next";
    let playerNameV = playerName.value;
    player1.name = playerNameV;
}
function removeChildren()
{
    if(check == 0)
    {
        check++;
        start();
    }else{
        displayScreen.removeChild(askName);
        displayScreen.removeChild(nextButton);
        displayScreen.removeChild(playerName);
        console.log(player1.name);
        check--;
        askAgeF();
    }
}
function askAgeF()
{
    displayScreen.appendChild(askAge);
    displayScreen.appendChild(playerAge);
    displayScreen.appendChild(nextButton2);
    askAge.innerText = "And how old are you?";
    nextButton2.innerText = "Next";
    let playerAgeV = playerAge.value;
    player1.age = playerAgeV;
    nextButton2.addEventListener("click", removeChildren2);
}
function removeChildren2()
{
    if(check == 0)
    {
        check++;
        askAgeF();
    }else{
        check--;
        displayScreen.removeChild(askAge);
        displayScreen.removeChild(nextButton2);
        displayScreen.removeChild(playerAge);
        Mega();
        setTimeout(Mega, 0);
        setTimeout(Mega, 0);
        player1.weapon = "Sword";
        steve.setAttribute("class", "steve2");
        steveFight();
    }
}
//The Boss!
function stop()
{
    const anchor = document.createElement("a");
    displayScreen.appendChild(anchor);
    anchor.setAttribute("href", "index.html");
    anchor.innerText = "stop";
}