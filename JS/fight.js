const backBtn = document.querySelector("#back");
let healMenu = document.createElement("div");
let food1 = document.createElement("div");
let food2 = document.createElement("div");
let food3 = document.createElement("div");
let food4 = document.createElement("div");
let food5 = document.createElement("div");
let food6 = document.createElement("div");
let food7 = document.createElement("div");
let food8 = document.createElement("div");
let food9 = document.createElement("div");
let shieldN = 3;
let shields = document.createElement("div");
let shield1 = document.createElement("div");
let shield2 = document.createElement("div");
let shield3 = document.createElement("div");
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
let steveText2 = document.createElement("h1");
let f1 = document.createElement("h1");
let f2 = document.createElement("h1");
let f3 = document.createElement("h1");
let steveHealth = document.createElement("h3");
let answer = document.createElement("input");
let submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "submit-button");
healMenu.setAttribute("class", "heal-menu");
shields.setAttribute("class", "shields");
shield1.setAttribute("class", "shield");
shield2.setAttribute("class", "shield");
shield3.setAttribute("class", "shield");
food1.setAttribute("class", "food");
food2.setAttribute("class", "food");
food3.setAttribute("class", "food");
food4.setAttribute("class", "food");
food5.setAttribute("class", "food");
food6.setAttribute("class", "food");
food7.setAttribute("class", "food");
food8.setAttribute("class", "food");
food9.setAttribute("class", "food");
healMenu.appendChild(food1);
healMenu.appendChild(food2);
healMenu.appendChild(food3);
healMenu.appendChild(food4);
healMenu.appendChild(food5);
healMenu.appendChild(food6);
healMenu.appendChild(food7);
healMenu.appendChild(food8);
healMenu.appendChild(food9);


fightBar.setAttribute("class", "fight-bar");
fightInfo.setAttribute("class", "fight-info");
fightInfo2.setAttribute("class", "fight-info");
fightInfo3.setAttribute("class", "fight-info");
fightInfo4.setAttribute("class", "fight-info");
btn1.setAttribute("class", "btn1");
btn2.setAttribute("class", "btn2");
btn3.setAttribute("class", "btn3");
btn4.setAttribute("class", "btn4");

const steve = document.querySelector(".steve");

let up = 0;
let down = 0;
let right = 0;
let left = 0;
let health = 400;
let turn = 0;

function steveFight()
{
    if(player1.health > 0 && health > 0)
    {
        turn++;
    }else
    {
        steveHealth.innerText = "Steve's Health: " + health;
        removeChildrenOfFight();
    }
    random();
    appendChildrenToFight();
    displayScreen.classList.add("display-screen-b");
    steveHealth.innerText = health;
    fightInfo.innerText = "Name: " + player1.name;
    fightInfo2.innerText = "Age: " + player1.age;
    fightInfo3.innerText = "Health: " + player1.health;
    fightInfo4.innerText = "Weapon: " + player1.weapon;
    btn1.innerText = "Attack";
    btn2.innerText = "Defend";
    btn3.innerText = "Heal";
    btn4.innerText = "Surrender";
    btn1.addEventListener("click", attack);
    btn2.addEventListener("click", appendShieldsForDefence);
    btn3.addEventListener("click", heal);
    btn4.addEventListener("click", removeChildrenOfFight);
}
function removeChildrenOfFight()
{
    displayScreen.removeChild(steveText);
    displayScreen.removeChild(steveHealth);
    displayScreen.removeChild(fightBar);
    sword.setAttribute("class", "sword");
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
}
//attacking
function attack()
{
    player1.attack();
    displayScreen.removeChild(fightBar);
    btn1.removeEventListener("click", attack);
    setTimeout(() => {steve.setAttribute("class", "steve3")}, 2000);
    setTimeout(() => {steve.setAttribute("class", "steve2")}, 5000);
    health = health - 20;
    setTimeout(steveChoice, 5000);
}
//defending
function appendShieldsForDefence()
{
    shields.appendChild(shield1);
    shields.appendChild(shield2);
    shields.appendChild(shield3);
    defend();
}
function defend()
{
    setTimeout(stopDefence2, 2000);
    displayScreen.removeChild(fightBar);
    displayScreen.appendChild(shields);
    btn2.removeEventListener("click", defend);
    shield1.addEventListener("dblclick", check2);
    shield2.addEventListener("dblclick", check2);
    shield3.addEventListener("dblclick", check2);
}
function check2()
{
    if(shieldN == 3)
    {
        shields.removeChild(shield1);
        shieldN--;
    }
    else if(shieldN == 2)
    {
        shields.removeChild(shield2);
        shieldN--;
    }
    else if(shieldN == 1)
    {
        stopDefence(); 
    }
}
function stopDefence()
{
    shields.removeChild(shield3);
    shieldN = 3;
    displayScreen.removeChild(shields);
    shield1.removeEventListener("dblclick", check2);
    shield2.removeEventListener("dblclick", check2);
    shield3.removeEventListener("dblclick", check2);
    ahHellNo();
}
function stopDefence2()
{
    shields.removeChild(shield3);
    shieldN = 3;
    displayScreen.removeChild(shields);
    shield1.removeEventListener("dblclick", check2);
    shield2.removeEventListener("dblclick", check2);
    shield3.removeEventListener("dblclick", check2);
    steveChoice();
}
function ahHellNo()

    {
        displayScreen.appendChild(steveText2);
        steveText2.innerText = "press The left arrow " + PublicRandomNum;
        setTimeout(()=>{steveText2.innerText = "press The right arrow " + PublicRandomNum2;}, 800);
        setTimeout(()=>{steveText2.innerText = "press The down arrow " + PublicRandomNum3;}, 1600);
        setTimeout(()=>{steveText2.innerText = "press The up arrow " + PublicRandomNum4;}, 2400);
        setTimeout(()=>{steveText2.innerText = "";}, 3200);
        window.addEventListener("keydown", buttonsA2);
        displayScreen.appendChild(submitBtn);
        submitBtn.innerText = "Submit";
        submitBtn.addEventListener("click", checkD);
    }
    function buttonsA2(e)
    {    
    switch(e.code) {
        case "ArrowLeft":
            left++;
            break;
        case "ArrowRight":
            right++;
            break;
        case "ArrowUp":
            up++;
            break;
        case "ArrowDown":
            down++;
            break;
    }
    }
    function checkD()
    {
        submitBtn.removeEventListener("click", check);
        window.removeEventListener("click", buttonsA2);
        if( up == PublicRandomNum4 && 
            down == PublicRandomNum3 && 
            right == PublicRandomNum2 && 
            left == PublicRandomNum )
        {
            steveText.innerText = "Only steve loses 5%!";
            health = health - 5;
        }
        else
        {
            steveText.innerText = "You and steve lost 5%!";
            player1.health = player1.health - 5;
            health = health - 5;
        }
        displayScreen.removeChild(submitBtn);
        displayScreen.removeChild(steveText2);
        up = 0;
        down = 0;
        right = 0;
        left = 0;
        steveFight();
    }
//healing
function heal()
{
    btn3.removeEventListener("click", heal);
    backBtn.addEventListener("click", goBack);
    displayScreen.removeChild(fightBar);
    displayScreen.appendChild(healMenu);
    food1.addEventListener("click", decreaseFood);
    food2.addEventListener("click", decreaseFood);
    food3.addEventListener("click", decreaseFood);
    food4.addEventListener("click", decreaseFood);
    food5.addEventListener("click", decreaseFood);
    food6.addEventListener("click", decreaseFood);
    food7.addEventListener("click", decreaseFood);
    food8.addEventListener("click", decreaseFood);
    food9.addEventListener("click", decreaseFood);
}
function goBack()
{
    backBtn.removeEventListener("click", goBack);
    displayScreen.removeChild(healMenu);
    steveFight();
}

function decreaseFood()
{
    player1.heal();
    displayScreen.removeChild(healMenu);
    steveChoice();
}
//steveAttacks
function steveChoice()
{
    
    steveHealth.innerText = "Steve's Health: " + health;
    let num = Math.random() * 3 + 1;
    num = Math.floor(num);
    switch(num)
    {
        case 1:
            randomizedAttack();
            break;
        case 2:
            steveAttack4();
            break;
        case 3:
            steveAttack5();
            break;
    }
}
function randomizedAttack()
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
    }
}
function steveAttack1()
{
    displayScreen.appendChild(steveText2);
    steveText2.innerText = "Choose a number Between 1 and 3";
    displayScreen.appendChild(answer);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "submit";
    submitBtn.addEventListener("click", fun1);
}
function steveAttack2()
{
    displayScreen.appendChild(steveText2);
    steveText2.innerText = "Choose a number Between 1 and 3";
    displayScreen.appendChild(answer);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "submit";
    submitBtn.addEventListener("click", fun2);
}
function steveAttack3()
{
    displayScreen.appendChild(steveText2);
    steveText2.innerText = "Choose a number Between 1 and 3";
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
function steveAttack4()
{
    displayScreen.appendChild(steveText2);
    steveText2.innerText = "press The left arrow " + PublicRandomNum;
    setTimeout(()=>{steveText2.innerText = "press The right arrow " + PublicRandomNum2;}, 800);
    setTimeout(()=>{steveText2.innerText = "press The down arrow " + PublicRandomNum3;}, 1600);
    setTimeout(()=>{steveText2.innerText = "press The up arrow " + PublicRandomNum4;}, 2400);
    setTimeout(()=>{steveText2.innerText = "";}, 3200);
    window.addEventListener("keydown", buttonsA);
    displayScreen.appendChild(submitBtn);
    submitBtn.innerText = "Submit";
    submitBtn.addEventListener("click", check);
}
function buttonsA(e)
{    
    switch(e.code) {
        case "ArrowLeft":
            left++;
            break;
        case "ArrowRight":
            right++;
            break;
        case "ArrowUp":
            up++;
            break;
        case "ArrowDown":
            down++;
            break;
        default:
    }
}
function check()
{
    submitBtn.removeEventListener("click", check);
    window.removeEventListener("click", buttonsA);
    if( up == PublicRandomNum4 && 
        down == PublicRandomNum3 && 
        right == PublicRandomNum2 && 
        left == PublicRandomNum )
    {
        steveText.innerText = "Correct";   
    }
    else
    {
        steveText.innerText = "Wrong";
        player1.health = player1.health - 20;
    }
    displayScreen.removeChild(submitBtn);
    displayScreen.removeChild(steveText2);
    up = 0;
    down = 0;
    right = 0;
    left = 0;
    steveFight();
}

function removeChildrenOfAttacks123()
{
    displayScreen.removeChild(answer);
    displayScreen.removeChild(submitBtn);
    displayScreen.removeChild(steveText2);
    steveFight();
}

//exports
export
{
    left,
    right,
    up,
    down,
    steveFight,
    steveText,
    steve,
    submitBtn,
    healMenu,
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9
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
import
{
    random,
    PublicRandomNum,
    PublicRandomNum2,
    PublicRandomNum3,
    PublicRandomNum4,
} from "./PublicRandomNumbers.js";
import
{
    steveAttack5
} from "./ColorsAttack.js";