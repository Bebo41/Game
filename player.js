class Player
{
    constructor(name, health)
    {
        this.name = name;
        this.age = 10;
        this.health = health;
        this.weapon = "weapon";
    }
    attack()
    {
        console.log("You attack with your " + this.weapon);
    }
    defend()
    {
        console.log("You defend yourself from the enemy attack");
    }
    heal()
    {
        console.logZ("You heal so your health increases");
    }
}
export {Player}