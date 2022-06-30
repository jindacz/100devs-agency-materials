// Coding time!
// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp:0,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength, ${this.xp} as xp`;
    }
  };
  
console.log(aurora.describe());


// // Aurora is harmed by an arrow
aurora.health -= 20;

// // Aurora equips a strength necklace
aurora.strength += 10;

// // Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());


// Modeling a dog
// Complete the following program to add the dog object definition.

let dog={
    name:"Fang",
    species:"boarhound",
    size:75,

    bark(){
      console.log("Grrr! Grrr!")
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));
let circle={
  radius:r,

  circumference(){
    return 2*Math.PI*this.radius
  },
  area(){
    return this.radius**2*Math.PI
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

let account={
  owner:"Alex",
  balance:0,
  
  credit(val){
    this.balance+=val
  },
  describe(){
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
}
console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());