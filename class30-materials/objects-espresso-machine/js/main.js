//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    consturctor(color,make,model,price){
        this.color=color
        this.make=make
        this.model=model
        this.price=price
    }
    turnOn(){
        console.log('Good day, I am now on!')
    }
    steam(){
        console.log('ITTSS SUMMERR SALLLEE 50%%%')
    }
    brew(){
        console.log('good stuff coming yor way')
    }
}

let gaggia=new EspressoMachine('red','Gaggia','Classic Pro')