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
const ipsumInput = document.querySelector('#ipsum-input')
const regExCaps = new RegExp('[A-Z]');
const regExByte = new RegExp('[ \.]')
const regExEnd = new RegExp('[.]');

const ipsumText =
  `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function randomNumber() {
  return Math.floor(Math.random() * (24 - 12) + 12);
}

function randomNumber2() {
  return Math.floor(Math.random() * (7 - 3) + 3);
}

function ispumGenerator(quantity) {
  let lengthType = form.querySelector('input[name="length-type"]:checked').value;

  let ipsumSplit = ipsumText.split(' ');
  let ipsumSent = [];
  let ipsumPar = [];

  let ipsumCap = ipsumSplit.filter(caps => {
    if (caps.match(regExCaps)) {
      return caps;
    }
  });

  let ipsumEnd = ipsumSplit.filter(end => {
    if (end.match(regExEnd)) {
      return end;
    }
  });

  let ipsumFiller = ipsumSplit.filter(filler => {
    if (!filler.match(regExCaps)) {
      if (!filler.match(regExEnd)) {
        return filler;
      }
    }
  })


  if (lengthType === 'word') {
    let randomSentLength = randomNumber();
    for (let k = 0; k < quantity; k++) {
      if (!ipsumValue[0] || ipsumValue[ipsumValue.length - 1].match(regExEnd)) {
        ipsumValue.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
      }
      else if (k === randomSentLength) {
        ipsumValue.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
        randomSentLength = randomNumber()
      }
      else if (ipsumValue.length === quantity - 1) {
        ipsumValue.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
        break;
      } else {
        ipsumValue.push(ipsumFiller[Math.floor(Math.random() * ipsumFiller.length)]);
      }
    }
    ipsumInput.innerHTML += `<p>${ipsumValue.join(' ')}</p>`
    ipsumValue = [];

  } else if (lengthType === 'paragraph') {
    let randomSentLength = randomNumber();
    let randomParLength = randomNumber2();
    for (let k = 0; k < quantity; k++) {
      for (let i = 0; i < randomParLength; i++) {
        for (let j = 0; j < randomSentLength; j++) {
          if (!ipsumSent[0]) {
            ipsumSent.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
          } else {
            ipsumSent.push(ipsumFiller[Math.floor(Math.random() * ipsumFiller.length)]);
          }
          if (ipsumSent.length === randomSentLength - 1) {
            ipsumSent.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
            randomSentLength = randomNumber()
            break;
          }
        }
        ipsumPar.push(ipsumSent.join(' '));
        randomParLength = randomNumber2()
        ipsumSent = [];
      }
      ipsumValue.push(ipsumPar.join(' '));
      ipsumPar = [];
    }

    for (let l = 0; l < ipsumValue.length; l++) {
      let value = ipsumValue[l];
      ipsumInput.innerHTML += `<p>${value}</p>`
    }
    ipsumValue = [];

  } else if (lengthType === 'list') {
    let randomSentLength = randomNumber();
    for (let k = 0; k < quantity; k++) {
      for (let j = 0; j < randomSentLength; j++) {
        if (!ipsumSent[0]) {
          ipsumSent.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
        } else {
          ipsumSent.push(ipsumFiller[Math.floor(Math.random() * ipsumFiller.length)]);
        }
        if (ipsumSent.length === randomSentLength - 1) {
          ipsumSent.push(ipsumEnd[Math.floor(Math.random() * ipsumEnd.length)]);
          randomSentLength = randomNumber()
          break;
        }
      }
      ipsumValue.push(ipsumSent.join(' '));
      randomParLength = randomNumber2();
      ipsumSent = [];
    }
    for (let l = 0; l < ipsumValue.length; l++) {
      let value = ipsumValue[l];
      ipsumInput.innerHTML += `
      <ul>
        <li>${value}</li>
      </ul>`
    }
    console.log(ipsumValue)
    ipsumValue = [];

  } else if (lengthType === 'bytes') {
    let randomSentLength = randomNumber();
    let byteSplit = ipsumText.split('');
    let byteCaps = byteSplit.filter(cap => {
      if(cap.match(regExCaps)) {
        return cap;
      }
    })
    let bytefiller = byteSplit.filter(fill => {
      if(!fill.match(regExCaps)) {
      if(!fill.match(regExEnd)) {
        if(!fill.match(regExByte)) {
          return fill;
        }
      }
    }
    })
    let byteCount = 0;
    let byteLength = Math.floor(Math.random() * (9 - 2) + 2);
    for (let k = 0; k < quantity; k++) {
      if (!ipsumValue[0]) {
        ipsumValue.push(byteCaps[Math.floor(Math.random() * byteCaps.length)]);
      }
      else if (byteCount === byteLength || ipsumValue[ipsumValue.length - 1] === ',') {
        ipsumValue.push(' ');
        byteCount = 0;
        byteLength = Math.floor(Math.random() * (10 - 1) + 1);
      }
      else if (ipsumValue.length === quantity - 1) {
        ipsumValue.push('.');
        break;
      } 
      else if (ipsumValue[ipsumValue.length - 1].match(regExEnd)) {
        ipsumValue.push(' ');
        ipsumValue.push(byteCaps[Math.floor(Math.random() * byteCaps.length)]);
      }else {
        ipsumValue.push(bytefiller[Math.floor(Math.random() * bytefiller.length)]);
      }
      byteCount++;
    }
    // ipsumInput.innerHTML += `<p>${ipsumValue.join(' ')}</p>`
    console.log(ipsumValue.join(''));
    console.log(ipsumValue.length);
    ipsumValue = [];
  }

  console.log(lengthType + " " + quantity);
}

submitBtn.addEventListener('click', (e) => {

  let quantity = form.querySelector('input[type="text"]').value;
  if (ipsumInput.innerHTML) {
    ipsumInput.innerHTML = "";
    ispumGenerator(quantity);
  } else {
    ispumGenerator(quantity);
  }


})