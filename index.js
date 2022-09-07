// Write your code here
class breakfast{
    constructor(food,drink)
    {
        this.food = food;
        this.drink = drink;
    }
}

class lunch{
    constructor(salad,soup,drink)
    {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }

}

class dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

}
// salad, soup, entree, and dessert. 
//Initialize dessert as a private