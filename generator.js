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

function ispumGenerator(quantity) {
  let lengthType = form.querySelector('input[name="length-type"]:checked').value;
  quantity = form.querySelector('input[type="text"]').value;

  let ipsumSplit = ipsumText.split(' ');
  let randomSentLength = Math.floor(Math.random() * (12 - 3) + 3);

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

  if(lengthType === 'word') {
    while (ipsumValue.length < quantity) {
      let randomIpsum = ipsumSplit[Math.floor(Math.random() * ipsumSplit.length)];
      if(ipsumValue.length === 0 || 
        ipsumValue[ipsumValue.length - 1].includes('.')){
        ipsumValue.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
      } else {
        ipsumValue.push(randomIpsum);
      }
      if(ipsumValue.length === quantity - 1 || ipsumValue.length === randomSentLength) {
        ipsumValue.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)])
      }
    }

  console.log(ipsumValue.join(' '));

  } else if (lengthType === 'paragraph') {

  } else if (lengthType === 'list') {

  } else if (lengthType === 'bytes') {

  }

  console.log(lengthType + " " + quantity)
} 

submitBtn.addEventListener('click', (e) => {
  ispumGenerator(8);
})