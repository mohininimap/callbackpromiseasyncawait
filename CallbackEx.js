// Callback Examples

console.log("start")
function displayName(name){
    setTimeout(()=>{
        console.log("Inside setTimeOut")
return name;

    },2000)

}

let nm= displayName('Ankita')
console.log(nm)
console.log("end")

// ============================================
// Resolve above problem in using callback

// console.log("start");
// function displayName(name,callback){
//     setTimeout(()=>{
//         console.log("Inside setTimeout");
 
//         return name;
//     },2000)
//     callback(name)
// }

// let nm=displayName('Mohan',(nm)=>{
//     console.log(nm)
// })
// console.log("end");
// ====================================
// complex callback->callback hell
// console.log("start")
// function displayName(name,callback){
// setTimeout(()=>{
// console.log("mmmsms",name)
// callback(name)
// },2000)

// }

// function displayHobbies(name,callback){
//     setTimeout(()=>{
// callback(["watching","dancing","playing"])
//     },1000)

// }

// let nm=displayName("Monika",(nm)=>{
//     console.log(nm);
//     displayHobbies(nm,(hobby)=>{
// console.log(hobby)
//     })
// })

// console.log("end")

// =============================

let p=new Promise((res,reject)=>{
    let a=1+1;
    if(a==2){
        res("success");
    }
    else{
        reject("Failed")
    }
})
p.then((msg)=>{
console.log("Message is then "+msg)
}).catch((err)=>{
    console.log("Message is catch "+err)

})

// ===========================
// Promise second example

// let p=new Promise((res,rej)=>{
//     let num=100;
//     res(num)
// }).then((val)=>{
//     return val+80;
// }).then((val)=>{
//     console.log(val)
// })

// =========================
// Promise another example wuth finally.finally execute both case then and catch also
// let p=new Promise((res,rej)=>{
//     let req=false;
//     if(req==true){
//         res("Successfully connect")
//     }else{
//         rej("Connection fail")
//     }

// }).then((msg)=>{
// console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Cleanup the code")
// })

// ==================================


// Using Promise Callback hell problem solve

console.log("start")
function displayName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name+"Inside displayName function -> setTimeout")
            resolve(name)
                },2000)
    })
   
}

function displayHobbies(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name+"Inside displayHobbies function -> setTimeout")
         resolve(['drawing',"Playing","Dancing"])
        },1000)
    })
   
}

displayName('Mohini')
.then(nm=>displayHobbies(nm))
.then((hobby)=>{
    console.log(hobby)
})
console.log("end")

// =================
//  async await

console.log("start")
function displayName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("Inside Name setTimeOut")
resolve(name);
        },2000)
    })
}

function getHobbies(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside hobbies settimeout");
            resolve(["playing","dancing","swimming"])
        },1000) 
    })

}


async function showHobby(){
const nm=await displayName('Sonam');
const hobby=await getHobbies(nm)
console.log(hobby)
}

showHobby();
console.log("End")

// =================================
// async await practice

// console.log("start")
// function displayName(name){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve(name)
//       },2000)
//     })
// }

// function getHobbies(name){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve(["playing","dancing","swimming"])
//       },2000)
//     })
// }

// async function showHobbies(){
// let nm=await displayName('Monalisa');
// let hobby=await getHobbies(nm)
// console.log(hobby)
// }

// showHobbies();
// console.log("end")

// ===================================
// Objects-purpose of object is group of related variable

const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');                                                                                                                                                                                    
    }
}

//Using dot notaion access the function
circle.draw();

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw')
        }
    }
}

const circle1=createCircle(1)
console.log(circle1);

const circle2=createCircle(5)
console.log(circle2)


// ========================
//objecct can't reassign

// const circle={
//     radius:1
// }

// // circle={}; This error cause error object can't reassign
// circle.color="yellow";
// circle.draw=function(){}

// delete circle.color;
// delete circle.draw;

// console.log(circle)

// ================================

function Circle(radius){
  this.radius=radius;
  this.draw=function(){
    console.log('draw');
  }
}

const another=new Circle(1);
console.log(typeof another) //object

// ==========================

// Declaration and initialization of Object

// Using Object Constructor

// Syntax

// var object_name=new Object();
// var fees=new Object(); it equal to var fees={}
// fees['Rahul']=100; ->fees.Rahul=100
// fees['Sumit']=200; -> fees.Sumit=200
// fees['Rohan']=300 -> fees.Roahan=300

// "nimap"


let str="nimap";

var counter=2;

let k=str.slice(0,str.length - counter);
console.log(k)

character = str.charAt(str.length-counter)
console.log(character)
let newst=character+k
console.log(newst)

    // console.log(str[i])
//     strnew= str.substring(0, str.length-1);
//    console.log(strnew)
//    character = str.charAt(str.length-1)
//    console.log(character)
//    let strn=character+strnew
//    console.log(strn)

// for(let i=0;i<str.length;i++){
//    console.log(str[i]) 
// }
