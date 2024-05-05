#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myPincode = 2288;
var myBalance = 9000;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPincode) {
    console.log("Correct code!!!");
}
var operationAns = await inquirer_1.default.prompt([
    {
        name: "operation",
        message: "please select options",
        type: "list",
        choices: ["withdrawl", "check balance"]
    }
]);
if (operationAns.operation === "withdrawl") {
    var amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    //=,-=,+=
    myBalance -= amountAns.amount;
    console.log("your remaining balance is: " + myBalance);
}
else if (operationAns.operation === "check balance")
    console.log("your current balance is:" + myBalance);
else {
    console.log("Your pinCode is incorrect");
}
