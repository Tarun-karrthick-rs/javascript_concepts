//callbacks

function logging(){
    console.log("Tarun");
}
setTimeout(logging,2000);//2s

setTimeout(()=>
{
    console.log("karrthick");
},3000);//3s

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(()=>{
            console.log(3);
        },3000);//1s+2s+3s
    },2000);//1s+2s
},1000); // 1s

function formValidation (){
    console.log("Form Validation called");
    formValidationCompleted();
}
function formValidationCompleted(){
    console.log("Form validation call back successful");
}
formValidation();

//In industry (more depth)
function formValidation (fVC){
    setTimeout(()=> {
        console.log("Form Validation called");
        console.log(fVC);
    },2000); //  after 2s the form validation will be called.
}
function formValidationCompleted(){
    console.log("Form validation call back successful");
}
formValidation(formValidationCompleted);

// var a=prompt("Please enter your age.");
// a=Number(a);
// function dob(){
//     if(a>=18){
//         permit();
//     }else{
//         notpermit();
//     }
    
// }
// function permit(){
//     console.log("You are permitted to access the library.");
// }
// function notpermit(){
//     console.log("You are not permitted to access the library.");
// }

// dob();


//promises - for replace of callbacks

const p1=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("success")
    },2000);
})
p1.then(console.log)
const p2=new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject("failure")
    },1000);
})
p2.then(console.log).catch(console.log);
// const data= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const ans="Tarun"
//         if(ans)
//             resolve(ans);
//         else
//             reject(new Error("No data"));
//     },1000);
// });
// console.log(data);

const p3=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("success")
    },2000);
})
const p4=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("failure")
    },1000);
})
Promise.all([p3,p4]).then(console.log).catch(console.log)
Promise.allSettled([p3,p4]).then(console.log).catch(console.log) // separate result
Promise.race([p3,p4]).then(console.log).catch(console.log) // for first one & reject others

//class code
//using resolve/reject is optional
//there are 3 states of promise they are, pending, reject,fulfill.
// function proBaseEg(){
//     let prom=new Promise((resolve)=>{
//         setTimeout(()=>{
//             reject("this ia reject example");
//             resolve("This is a base example");
//         },1000);
//     });

//     console.log(
//         .then((val) =>{
//             console.log(val);
//         })
//         .catch(val=>{
//             console.log(val);
//         })
//     );
// }
// proBaseEg();
//real time base example
// function locationFinder(){
//     time=2000
//     location="Skcet";
    
//     return new Promise((locFound,locNotFound)=>{
//         setTimeout(() =>{
//             if(isLocationFound(location,time)){
//                 locFound("Location Found");
//             }else{
//                 locNotFound("location not found");
//             }
//             },time);
//     });
// }
// isLocationFound=(location,time)=>{
//     isLoc="Skcet";
//     time=20000
//     // return new Promise((locFound,locNotFound))
//     if(loc === isLoc && t<=time){
//         return true;
//     }else{
//         return false;
//     }
    
// }
// locationFinder()

// async & await
async function myfn(){
    return 1;
}
console.log(myfn());

// async function awaitfn(){
//     const op=await myfn();
//     console.log(op)
// }

async function awaitfn(){
    try{
        const v1= await myfn()
        const v2= await incrementOne(v1);
        const v3= await incrementOne(v2);
        const v4= await incrementOne(v3);
    }
    catch{
        console.error('global error',error);
    }
}
async function incrementOne(res){
    return new Promise((resolve) => setTimeout (() => {
        resolve(res+1);
    },1000))
}
awaitfn()