console.log('hello world')

//factory function
function createCricle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw')
        }
    }
    
}

const circle=createCricle(1)
circle.draw();

//constactor function
function Circle(radius){
    console.log('this',this)
    this.radius=radius;
    this.draw=function(){
        console.log('draw')
    }
}
const another=new Circle(1)

// let x={}
// //let x= new Object();

// new String() //'',"",``
// new Boolean() //true,false
// new Number() //1,2,3

Circle.call({},1) //pass in window object
Circle.apply({},[1,2,3]) //functions are objects

//change address of value
let x={value:10}
let y=x
x.value=20

//pass by its reference
let obj={val:10}
function increase(obj){
    obj.value++
}

console.log(increase(obj))

//user.token='asdasdsd'

circle.location={x:1};
circle['location']={x:1}

const propertyName='center location'
circle[propertyName]={x:1}

//delete
delete circle.location

//iterate property of an object
for(let key in circle){
    if(typeof circle[key]!=='function')
        console.log(key,circle[key]) //get value of property
}
const keys=Object.keys(circle)
console.log(keys)

if('radius' in circle) console.log('circle has a radius')


//default:

function Circle(radius){

    this.radius=radius;
    //define as local variable, private member in Circle function
    let defaultLocation={x:0,y:0}

    this.getDefualtLocation=function(){
        return defaultLocation;
    }
    this.draw=function(){
        let x,y;
        computeOptimumLocation(0.1);
        //defaultLocation
        //this.radius
    } 
    //use defineProperty to define getter and setter
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x||!value.y){
                throw new Error('invalid location')
            }
            defaultLocation=value
        }
    })
}
const circle=new Circle(10)
circle.defaultLocation=1;
circle.draw()

//abstraction
//hide the detials and show essential




//define stiowatch
const sw=new Stopwatch()


function Stopwatch(){
    let startTime,endTime,running,duration=0

    this.start=function(){
        if(running) throw new Error('already started')
        running=true
        startTime=new Date()
    }

    this.stop=function(){
        if(!running) throw new Error('not started')
        running=false
        endtime=new Date()
        const seconds= (endtime.getTime()-startTime.getTime())/1000 //return milli-second
        duration+=seconds
    }
    this.reset=function(){
        startTime=null
        endTime=null
        running=false
        duration=0
    }
    Object.defineProperty(this,'duration',{
        get:function(){return duration}
    })
}