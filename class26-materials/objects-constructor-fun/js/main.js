//Create a constructor with 4 properties and 3 methods
function pizzaMachine(size,toppings,curst,sauce){
    this.size=size
    this.topping=toppings
    this.crust=crust
    this.sauce=sauce

    this.estimatedDeliveryTime=function(){
        console.log('Calculating')
    }

    this.burnMouth=function(){
        console.log('Burn mouth')
    }
}

pizzaMachine.prototype.cheese=false
