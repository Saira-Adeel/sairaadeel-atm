#!/usr/bin/env node

import inquirer from "inquirer"

let myPincode =2288
let myBalance=9000

let pinAnswer=await inquirer .prompt([
    {
        name:"pin",
        message:"enter your pin",
        type:"number"
    }
]
)
if(pinAnswer.pin===myPincode){
    console.log("Correct code!!!")
}
let operationAns=await inquirer.prompt(
[
    {
       name:"operation",
       message:"please select options",
       type:"list", 
       choices:["withdrawl","check balance"]
    }
]
)
if(operationAns.operation==="withdrawl"){
    let amountAns=await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]
    );
    //=,-=,+=
    myBalance-=amountAns.amount;
    console.log("your remaining balance is: "+myBalance)
}
else if(operationAns.operation==="check balance")
    console.log("your current balance is:"+myBalance)

else{
    console.log("Your pinCode is incorrect")
}