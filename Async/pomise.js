// if succeed call resolve, if fail call reject
const isPregnant=false
const promise=new Promise((resolve,reject)=>{
    if (isPregnant){
        resolve(`son's fater`)
    }else{
        reject(`husband`)
    }
})

promise
    .then(name=>{
        console.log(`man become ${name}`)
    })
    .catch(name=>{
        console.log(`man become ${name}`)
    })
    .finally(()=>{
        console.log(`get married`)
    })


const imgAddress=""
const imgPromise=(url)=>{
    return new Promise ((resolve,reject)=>{
        const img=new Image();
        img.src=url
        img.onload=()=>{
            resolve(img)
        }
        img.onerror=()=>{
            reject(new Error `wrong picture`)
        }
    })
}

imgPrimise(imgAddress)
    .then(img=>{
        document.body.appendChild(img)
    })
    .catch(err=>{
        document.body.innerHTML=err
    })