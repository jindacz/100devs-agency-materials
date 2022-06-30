//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, health,speed,specialMove){
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove

    this.throw = function(){
        console.log('YET');
    }
    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`);
    }
    this.fatality = function(){
        console.log('GET OVER HERE');
    }
}

let chunLi = new StreetFighter('Chun Li', 100, 100, 'Spinning Bird Kick')