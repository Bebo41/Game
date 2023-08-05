import {Player} from "./player.js";
//elements
const body = document.querySelector("body");
const displayScreen = document.querySelector(".display-screen");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const nextBtn = document.querySelector("#next");
const steve = document.querySelector(".steve");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
let steveHealth = document.createElement("h3");
let playerName = document.createElement("input");
let playerAge = document.createElement("input");
let askName = document.createElement("h2");
let askAge = document.createElement("h2");
let nextButton = document.createElement("button");
let nextButton2 = document.createElement("button");
let fightBar = document.createElement("div");
let fightInfo = document.createElement("p");
let fightInfo2 = document.createElement("p");
let fightInfo3 = document.createElement("p");
let fightInfo4 = document.createElement("p");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
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
        steveFight();
    }
}
//The Boss!

function steveFight()
{
    let momentum =  11000;
    let steveHealthV = 250;
    appendChildrenToFight();
    steveTalk();
    displayScreen.classList.add("display-screen-b");
    while (player1.health > 0 && steveHealthV > 0 && momentum != 10000)
    {
        steve.setAttribute("class", "steve2");
        steveHealth.innerText = "Steve's Health: " + steveHealthV;
        fightInfo.innerText = "Name: " + player1.name;
        fightInfo2.innerText = "Age: " + player1.age;
        fightInfo3.innerText = "Health: " + player1.health;
        fightInfo4.innerText = "Weapon: " + player1.weapon;
        btn1.innerText = "Attack";
        btn2.innerText = "Defend";
        btn3.innerText = "Heal";
        btn4.innerText = "Surrender";
        btn1.addEventListener("click", () => 
        {
            p1.innerText = "You attacked Steve";
            steveHealthV = steveHealthV - 20;
        });
        btn2.addEventListener("click", () => 
        {
            p2.innerText = "You attacked Steve";
            steveHealthV = steveHealthV - 20;
        });
        momentum--;
    }
}
function steveTalk()
{
    p1.innerText = "Steve: Hello Why did you come here?";
    setTimeout(() => {
        p2.innerText = "You: The King sent me to kill you?";
    }, 8000);
    setTimeout(() => {
        p3.innerText = "Steve: hahahahhahahhahahhahahha";
    }, 18000);
    setTimeout(() => {
        p4.innerText = "Steve: lets fight then"
    }, 20000);
}
function appendChildrenToFight()
{
    displayScreen.appendChild(steveHealth);
    displayScreen.appendChild(fightBar);
    fightBar.appendChild(fightInfo);
    fightBar.appendChild(fightInfo2);
    fightBar.appendChild(fightInfo3);
    fightBar.appendChild(fightInfo4);
    fightBar.appendChild(btn1);
    fightBar.appendChild(btn2);
    fightBar.appendChild(btn3);
    fightBar.appendChild(btn4);
    fightBar.setAttribute("class", "fight-bar");
    fightInfo.setAttribute("class", "fight-info");
    fightInfo2.setAttribute("class", "fight-info");
    fightInfo3.setAttribute("class", "fight-info");
    fightInfo4.setAttribute("class", "fight-info");
    btn1.setAttribute("class", "btn1");
    btn2.setAttribute("class", "btn2");
    btn3.setAttribute("class", "btn3");
    btn4.setAttribute("class", "btn4");
    
}
function stop()
{
    const anchor = document.createElement("a");
    displayScreen.appendChild(anchor);
    anchor.setAttribute("href", "index.html");
    anchor.innerText = "stop";
}