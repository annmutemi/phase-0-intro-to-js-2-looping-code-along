// Code your solutions in this file
const names = [];

writeCards(["Charlie", "Samip", "Ali"],  "birthday")

function writeCards(names, event){
    let messages = [];
    for(let i=0; i < names.length; i++){  
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countDown(integer){
    let countDown = integer;
    while(countDown >= 0){
        console.log(countDown)
        countDown--;
    }
}