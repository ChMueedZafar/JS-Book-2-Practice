// Ch no 13 Concurrency
// callback 1:
function dosomething (callback){
    callback ();
}
function sayHi(){
    console.log("Hi!");
} 
dosomething (sayHi);
// callbback 2:
function judge(grade){
    switch (true){
        case grade == "A":
            console.log("You got an ",grade,": amazing!");
            break;
            case grade == "B":
            console.log("You got an ",grade,": wel done!");
            break;
            case grade == "C":
            console.log("You got an ",grade,": alright.");
            break;
            case grade == "D":
            console.log("You got an ",grade,": hmmmm....");
            break;
            default:
                console.log("An", grade , "! what?!");
    }
}
function getGrade (score, callback){
    let grade ;
    switch (true){
        case score >= 90:
            grade = "A";
            break;
            case score >= 80:
                console.log(score);
            grade = "B";
            break;
            case score >= 70:
            grade = "C";
            break;
            case score >= 60:
            grade = "D";
            break;
            default:
                grade = "F"
    }
    callback(grade);
}
getGrade(85, judge);

// setInterval (encourage, 500);
// function encourage(){
//     console.log("you're doing great, keep goinng!");
// }


// practice ex no 13.1
function greet(name){
    console.log(`Hello, I'm ${name[0]} ${name[1]}`)
}


function secondfunc(fullName,callback){
    let nameArr = fullName.split()
    callback(nameArr)
}
secondfunc("Abdul Mueed", greet)

// Promises

let psromise = new Promise (function (resolve, reject) {

    let x = 20;
    if (x > 10){
        resolve (x);        
    } else { 
        reject ("Too low");     
    }
});

Promise.then(
    function (value){
        console.log("sucess:", value);
    },
    function (error){
        console.log("Error:", error);
    }
);

const Promise = new Promise ((resolve, reject) =>{
    resolve ("sucess!");
})
.then(value => {
    console.log(value)
    return "we"
})
.then(value => {
    console.log(value)
    return "can"
})
.then(value => {
    console.log(value)
    return "chain"
})
.then(value => {
    console.log(value)
    return "promises"
})
.then(value => {
    console.log(value)
})
.catch (value => {
    console.log(value);
})

const psromise1 = new psromise ((resolve, reject) => {
    reject ("oops..");
})
.then (value => {
    console.log(value);
    return "we";
})
.then (value => {
    console.log(value);
    return "can";
})
.then (value => {
    console.log(value);
    return "chain";
})
.then (value => {
    console.log(value);
    return "promises";
})
.catch (value => {
    console.log(value);
})

