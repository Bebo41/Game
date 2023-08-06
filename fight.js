let fightBar = document.createElement("div");
let fightInfo = document.createElement("p");
let fightInfo2 = document.createElement("p");
let fightInfo3 = document.createElement("p");
let fightInfo4 = document.createElement("p");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let steveText = document.createElement("p");
let steveHealth = document.createElement("h3");
let health = 250;
const steve = document.querySelector(".steve");

function steveFight()
{
    appendChildrenToFight();
    steveTalk();
    displayScreen.classList.add("display-screen-b");
    steve.setAttribute("class", "steve2");
    steveHealth.innerText = "Steve's Health: " + health;
    fightInfo.innerText = "Name: " + player1.name;
    fightInfo2.innerText = "Age: " + player1.age;
    fightInfo3.innerText = "Health: " + player1.health;
    fightInfo4.innerText = "Weapon: " + player1.weapon;
    btn1.innerText = "Attack";
    btn2.innerText = "Defend";
    btn3.innerText = "Heal";
    btn4.innerText = "Surrender";
    btn1.addEventListener("click", attack);
}
function attack()
{
    health = health - 20;
    p1.innerText = "You attack Steve";
    if(player1.health > 0 && health > 0)
    {
        steveFight();
    }else
    {
        removeChildrenOfFight();
    }
}
function removeChildrenOfFight()
{
    displayScreen.removeChild(steveText);
    displayScreen.removeChild(steveHealth);
    displayScreen.removeChild(fightBar);
    fightBar.removeChild(fightInfo);
    fightBar.removeChild(fightInfo2);
    fightBar.removeChild(fightInfo3);
    fightBar.removeChild(fightInfo4);
    fightBar.removeChild(btn1);
    fightBar.removeChild(btn2);
    fightBar.removeChild(btn3);
    fightBar.removeChild(btn4);
}
function appendChildrenToFight()
{
    displayScreen.appendChild(steveText);
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
//exports
export
{
    steveFight
}
//imports
import
{
    player1,
    displayScreen,
} from "./script.js";