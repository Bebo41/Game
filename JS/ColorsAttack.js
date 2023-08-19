let submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "submit-button");
submitBtn.innerText = "submit";
let redS = document.querySelector(".red");
let blueS = document.querySelector(".blue");
let redBtn = document.querySelector(".redBtnV");
let blueBtn = document.querySelector(".blueBtnV");
redBtn.addEventListener("click", () => {rBC++;});
blueBtn.addEventListener("click", () => {bBC++;});
submitBtn.addEventListener("click", check);
let rSP = 0;
let bSP = 0;
let rBC = 0;
let bBC = 0;
function steveAttack5()
{
    squareMotion();
    setTimeout(squareMotion, 600);
    setTimeout(squareMotion, 1200);
    setTimeout(squareMotion, 1800);
    setTimeout(squareMotion, 2400);
    setTimeout(waiting, 3000);
}
function squareMotion()
{
    random2();
        if (PublicRandomNum5 == 1)
        {
            rSP++
            redS.classList.add("redA");
            redS.classList.remove("red");
            setTimeout(()=>{redS.classList.remove("redA"); redS.classList.add("red");}, 500);
        }
        else if (PublicRandomNum5 == 2)
        {
            bSP++;
            blueS.classList.add("blueA");
            blueS.classList.remove("blue");
            setTimeout(()=>{blueS.classList.remove("blueA"); blueS.classList.add("blue");}, 500);
        }
        else
        {
            console.log("oh no");
        }
}
function waiting()
{ 
    redBtn.classList.add("redBtn");
    blueBtn.classList.add("blueBtn");
    redBtn.classList.remove("redBtnV");
    blueBtn.classList.remove("blueBtnV");
    displayScreen.appendChild(submitBtn);
}
function check()
{
    if(rBC == rSP && bBC == bSP)
    {
        steveText.innerText = "Correct Sequence!";
    }
    else
    {   
        steveText.innerText = "Wrong Sequence!";
        player1.health = player1.health - 22;
    }
    redBtn.classList.remove("redBtn");
    blueBtn.classList.remove("blueBtn");
    redBtn.classList.add("redBtnV");
    blueBtn.classList.add("blueBtnV");
    displayScreen.removeChild(submitBtn);
    steveFight();
    rSP = 0;
    bSP = 0;
    rBC = 0;
    bBC = 0;
}
//exports
export
{
    steveAttack5
}
//imports
import
{
    PublicRandomNum5,
    random2
} from "./PublicRandomNumbers.js";
import
{
    displayScreen,
    player1
} from "./script.js";
import
{
    steveFight,
    steveText
} from "./fight.js";