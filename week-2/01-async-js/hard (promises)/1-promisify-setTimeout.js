/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const res = require("express/lib/response");

function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },n*1000)
    })
}
wait(3).then(()=>console.log("3 seconds have passed!"));
console.log("This should be printed before the above message.");
