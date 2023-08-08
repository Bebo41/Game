let fightBar = document.createElement("div");
let fightInfo = document.createElement("p");
let fightInfo2 = document.createElement("p");
let fightInfo3 = document.createElement("p");
let fightInfo4 = document.createElement("p");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let steveText = document.createElement("h1");
let f1 = document.createElement("h1");
let f2 = document.createElement("h1");
let f3 = document.createElement("h1");
let steveHealth = document.createElement("h3");
let answer = document.createElement("input");
let submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "submit-button");
let health = 250;
const steve = document.querySelector(".steve");
const sword = document.querySelector(".sword");

function steveFight()
{
    appendChildrenToFight();
    displayScreen.classList.add("display-screen-b");
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
    /*
    window.addEventListener("keydown", e => {
        switch(e.code) {
            case "ArrowLeft":
                console.log("the left arrow was pressed");
                break;
            default:
                console.log("A key was pressed but it wasnt the left arrow key");
        }
    })*/
}
function attack()
{
    displayScreen.removeChild(fightBar);
    btn1.removeEventListener("click", attack);
    sword.setAttribute("class", "sword2");
    setTimeout(() => 
    {
        steve.setAttribute("class", "steve3")
        Punch();
        Punch();
        Punch();
    }, 2000);
    health = health - 20;
    if(player1.health > 0 && health > 0)
    {
        setTimeout(()=>{sword.setAttribute("class", "sword")}, 3000);
        setTimeout(()=>{steve.setAttribute("class", "steve2")}, 5000);
        setTimeout(steveChoice, 5000); 
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
    sword.setAttribute("class", "sword")
}
function appendChildrenToFight()
{
    fightBar.appendChild(steveText);
    fightBar.appendChild(f1);
    fightBar.appendChild(f2);
    fightBar.appendChild(f3);
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
function steveChoice()
{
    let num = Math.random() * 3 + 1;
    num = Math.floor(num);
    switch(num)
    {
        case 1:
            steveAttack1();
            break;
        case 2:
            steveAttack2();
            break;
        case 3:
            steveAttack3();
            break;
        //case 4:
           // steveAttack4();
            //break;
    }
}
function steveAttack1()
{
    displayScreen.appendChild(answer);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "submit";
    submitBtn.addEventListener("click", fun1);
}
function steveAttack2()
{
    displayScreen.appendChild(answer);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "submit";
    submitBtn.addEventListener("click", fun2);
}
function steveAttack3()
{
    displayScreen.appendChild(answer);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "submit";
    submitBtn.addEventListener("click", fun3);
}
function fun1()
{
    if(answer.value == "1")
    {
        steveText.innerText = "Correct Choice";
    }else{
        steveText.innerText = "Wrong Choice";
        player1.health = player1.health - 15;
    }
    submitBtn.removeEventListener("click", fun1);
    removeChildrenOfAttacks123()
}
function fun2()
{
    if(answer.value == "2")
    {
        steveText.innerText = "Correct Choice";
    }else{
        steveText.innerText = "Wrong Choice";
        player1.health = player1.health - 15;
    }
    submitBtn.removeEventListener("click", fun2);
    removeChildrenOfAttacks123()
}
function fun3()
{
    if(answer.value == "3")
    {
        steveText.innerText = "Correct Choice";
    }else{
        steveText.innerText = "Wrong Choice";
        player1.health = player1.health - 15;
    }
    submitBtn.removeEventListener("click", fun3);
    removeChildrenOfAttacks123()
}



function removeChildrenOfAttacks123()
{
    submitBtn.removeEventListener("click", ()=>{});
    displayScreen.removeChild(answer);
    displayScreen.removeChild(submitBtn);
    steveFight();
}
//exports
export
{
    steveFight,
    steve
}
//imports
import
{
    player1,
    displayScreen,
} from "./script.js";
import
{
    Punch
} from "./playMusic.js";