const sword = document.querySelector(".sword");
class Player
{
    constructor(name, health)
    {
        this.food = 9;
        this.name = name;
        this.age = 10;
        this.health = health;
        this.weapon = "weapon";
    }
    attack()
    {    
        sword.setAttribute("class", "sword2");
        setTimeout(()=>{sword.setAttribute("class", "sword")}, 3000);
        setTimeout(() => 
        {
            Punch();
            Punch();
            Punch();
        }, 2000);
    }
    heal()
    {
        switch(this.food)
    {
        case 1:
            healMenu.removeChild(food1);
            break;
        case 2:
            healMenu.removeChild(food2);
            break;
        case 3:
            healMenu.removeChild(food3);
            break;
        case 4:
            healMenu.removeChild(food4);
            break;
        case 5:
            healMenu.removeChild(food5);
            break;
        case 6:
            healMenu.removeChild(food6);
            break;
        case 7:
            healMenu.removeChild(food7);
            break;
        case 8:
            healMenu.removeChild(food8);
            break;
        case 9:
            healMenu.removeChild(food9);
            break;
        default:
            this.food = 9;
            break;
    }
    this.food--;
    this.health = this.health + 16;
    if (this.health > 100)
    {
        this.health = 100;
    }
    }
}
//exports
export 
{
    Player
}
//imports
import
{
    Punch
} from "./playMusic.js"
import
{
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
} from "./fight.js"