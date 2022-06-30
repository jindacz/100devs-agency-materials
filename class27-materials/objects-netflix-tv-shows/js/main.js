//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix{
    constructor(title,genre,rating,numOfEp){
        this.title=title
        this.genre=genre
        this.rating=rating
        this.numOfEp=numOfEp
    }
    update(){
        console.log("updated")
    }
    add(){
        console.log("added")
    }
    delete(){
        console.log("deleted")
    }
}

let bridgerton=new Netflix('Bridgerton','Period Romantic Drama','99%',16)