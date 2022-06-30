//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
//大写 for constructor
function StreetFighter(val1,val2,val3,val4){
    this.make=val1
    this.model=val2
    this.color=val3
    this.door=val4
    this.honk=function(){
        console.log('beep')
    }
    this.lock=function(){
        console.log(`locked ${this.model} doors!`)
    }
    this.check=function(){
        console.log('check')
    }
}
let ryu=new StreetFighter('high','high','get over here','hydoken')


let drink={
    brand:'Gatorade',
    size:'20fl oz'
    pour: function(){
        console.log(`I love my ${this.brand} ${this.size}`)
    }
}

// drink.brand='Gatorade'
// drink.size='20 fl oz'
// drink.color='yellow'
// drink.hasAlcohol=false
// drink.pour=function(){
//     console.log('Now it is all over the floor')
// }

