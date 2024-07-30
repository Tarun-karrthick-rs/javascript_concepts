// passing multiple parameter
const person1 = {
    name:"Tarun",
    age:21,
};
const person2 = {
    name:"Karrthick",
    age:21,
};
function printName(name,age){
    console.log(name);
    console.log(age);
}
printName(person1.name,person1.age);
printName(person2.name,person2.age);
printName('Devil',20);


// object as parameter
const person3 = {
    name:"A2D",
    age:21,
};
const person4 = {
    name:"Engineering Fact",
    age:21,
};
function printPerson(person){
    console.log(person.name);
    console.log(person.age);
}
printPerson(person3);
printPerson(person4);
printPerson({name:'king',age:21});

function printPer(person = {name: 'Raja',age: 19}) //if nothing called it will be take the default one
{
    console.log(person.name);
    console.log(person.age);
}
printPer(); 
printPer(person4);


//return as arrayList in c++,java
function printarr(...arg){
    console.log(arg);
}
printarr(person1.name);
printarr(person1);


//Arthimetic operations
function prname(firstname,lastname){
    const name=firstname+' '+lastname;
    console.log(name);
}
prname('Tarun', 'Karrthick');


//retun statement understanding
function getfullname(firstname,lastname){
    // const name=[firstname,lastname];
    return {firstName:firstname,lastname:lastname};
}
let fullName=getfullname('King','Tarun');
console.log(fullName);


//inner function
function getNAME(fname,lname){
    function joint(name1,name2){
        const name=name1+' '+name2;
        return name;
    }
    const FullName=joint(fname,lname);
    return FullName
}
let FullName= getNAME('Devil','Angel');
console.log(FullName);

//anonymous function
const getanyname=function(f1name,l1name){
    return f1name+' '+l1name;
}
let anyname=getanyname('White','Devil');
console.log(anyname);

//Arrow function
const getarrname=(f2name,l2name) => {
    return f2name+' '+l2name;
}
//for single line 
const getsingarr=(f3name,l3name) => f3name+' '+l3name;

let arrname=getanyname('Dark','Devil');
console.log(arrname);
let singarr=getsingarr('Lavie','Sports');
console.log(singarr);

