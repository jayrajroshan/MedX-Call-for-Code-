var express = require('express');
var router = express.Router();
const Web3 = require("web3");
const bodyParser = require("body-parser");

var app = express();
console.log('page rendered');



const accountAddress ="0xe04078F48A7DfAc7a65De40c6bD053079f0814eD";


if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://45.56.121.185:8080"));
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];

var gccg = new web3.eth.Contract(
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_Record_id",
                    "type": "uint256"
                }
            ],
            "name": "RecordEvent",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_age",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_gender",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_issued_by",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_validity",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_record_number",
                    "type": "uint256"
                }
            ],
            "name": "addRecord",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_record_number",
                    "type": "uint256"
                }
            ],
            "name": "getNumber",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getRecord",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getRecords",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "age",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "gender",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "issued_by",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "validity",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "record_number",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct MedX.Record[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "recordCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "records",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "age",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "gender",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "issued_by",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "validity",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "record_number",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
    ],
    "0xeF1669769e8559952835Da807e1075D294c69ADd" //contract address
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const detail=()=>{
  gccg.methods
    .getNumber(122333)
    .call({ from: accountAddress }, function (error, result) {
      if (!error) {
        let id = result[0];
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("Gender: " + gender);
        if (id == 0) {
          res.end("fail");
          console.log("User not found");
        }
      } else console.error(error);
    });
//send records ,str name, int age, str gender, str date,str issuedby, str validity, int recordnum 
};

const details=()=>{
  gccg.methods
    .getRecords()
    .call({ from: accountAddress }, function (error, result) {
      if (!error) {
        let id = result[0];
        console.log(result);
        if (id == 0) {
          res.end("fail");
          console.log("User not found");
        }
      } else console.error(error);
    });
};

const addRecord = (data) =>{
  gccg.methods
  .addRecord(data)
  .send({ from: accountAddress })
  .then(function (receipt) {
    console.log(receipt); // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
    res.send(receipt);
  });

res.send("success");
};

exports.addRecord = addRecord;
exports.details = details;
exports.detail = detail;
module.exports = app;