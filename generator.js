// const { resolveNaptr } = require('dns');
// const https = require('https');
// const { json } = require('stream/consumers');

// const { registerPrompt } = require("inquirer");

// let paras = 6;
// let sent = 4
// // Connect to Bacon API for Ipsum Generator
// function ipsumGenerator() {
//   let request = https.get(`https://baconipsum.com/api/?type=meat-and-filler`, function (response) {
//     let body = '';
//     response.on('data', function (data) {
//       body += data.toString();
//     })
//     response.on('end', () => {
//       const baconGen = JSON.parse(body);
//       console.log(baconGen);
//     })
//   })
// }

// module.exports.ipsumGenerator = ipsumGenerator;

let ipsumValue = [];
const submitBtn = document.querySelector(`button`);
const form = document.querySelector('form');
const regExCaps = new RegExp('[A-Z]');
const regExEnd = new RegExp('[.]');

const ipsumText =
  `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function randomNumber() {
  return Math.floor(Math.random() * (12 - 3) + 3);
}

function randomNumber2() {
  return Math.floor(Math.random() * (6 - 1) + 1);
}

function ispumGenerator(quantity) {
  let lengthType = form.querySelector('input[name="length-type"]:checked').value;

  let ipsumSplit = ipsumText.split(' ');
  let ipsumSent = [];
  let ipsumPar = [];

  let ipsumCap = ipsumSplit.filter(caps => {
    if(caps.match(regExCaps)) {
      return caps;
    }
  });

  let ipsumEnd = ipsumSplit.filter(end => {
    if(end.match(regExEnd)) {
      return end;
    }
  });

  let ipsumFiller = ipsumSplit.filter(filler => {
    if(!filler.match(regExCaps)) {
      if(!filler.match(regExEnd)) {
        return filler;
      }
    }
  })


  if(lengthType === 'word') {
    let randomSentLength = randomNumber();
    while (ipsumValue.length < quantity) {
      let randomIpsum = ipsumSplit[Math.floor(Math.random() * ipsumSplit.length)];
      if(ipsumValue.length === 0 || 
        ipsumValue[ipsumValue.length - 1].includes('.')){
        ipsumValue.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
      } else if(ipsumValue.length === quantity - 1 || ipsumValue.length == randomSentLength - 1) {
        ipsumValue.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
        randomSentLength = randomNumber();
        console.log(ipsumValue.length == randomSentLength);
      } else {
        ipsumValue.push(randomIpsum);
      }
    }

  console.log(ipsumValue.join(' '));

  } else if (lengthType === 'paragraph') {

    let randomSentLength = randomNumber();
    let randomParLength = randomNumber2();
    if(ipsumValue.length !== quantity) {
    while (ipsumValue.length < quantity) {
      if(ipsumSent.length === 0){
        ipsumSent.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
      } else {
        ipsumSent.push(ipsumFiller[Math.floor(Math.random() * ipsumFiller.length)]);
      } 
      
      if(ipsumSent.length === randomSentLength - 1) {
        ipsumSent.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
        ipsumPar.push(ipsumSent.join(' '));
        console.log(ipsumPar);
        ipsumSent = [];
        if(ipsumPar.length === randomParLength - 1) {
          ipsumValue.push(ipsumPar.join(' '));
          ipsumPar = [];
        }
    }
  }
  } else {
    console.log(ipsumValue.join(' '));
    console.log(ipsumValue)

  }

    // if (ipsumValue.length === quantity) {
    //   console.log(ipsumValue.join(' '));
    //   ipsumValue = [];
    // }

  } else if (lengthType === 'list') {

  } else if (lengthType === 'bytes') {

  }

  console.log(lengthType + " " + quantity)
} 

submitBtn.addEventListener('click', (e) => {

  let quantity = form.querySelector('input[type="text"]').value;
  ispumGenerator(quantity);
})