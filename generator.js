// const { resolveNaptr } = require('dns');
// const https = require('https');
// const { json } = require('stream/consumers');

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

console.log(ipsumValue === []);

function ispumGenerator(quantity) {
  let lengthType = form.querySelector('input[name="length-type"]:checked').value;
  quantity = form.querySelector('input[type="text"]').value;

  let ipsumSplit = ipsumText.split(' ');

  let ipsumCap = ipsumSplit.filter(caps => {
    if(regExCaps.test(caps)) {
      return caps;
    }
  });

  let ipsumEnd = ipsumSplit.filter(end => {
    if(regExEnd.test(end)) {
      return end;
    }
  });

  while (ipsumValue.length < 9) {
    let randomIpsum = ipsumSplit[Math.floor(Math.random() * ipsumSplit.length)];
    if(regExEnd.test(ipsumValue[ipsumValue.length - 1]) || regExCaps.test(ipsumValue[ipsumValue.length - 1])){
      ipsumValue.push(ipsumCap[Math.floor(Math.random() * ipsumCap.length)]);
    } else {
      ipsumValue.push(randomIpsum);
    }
  }

  // for (let i=0; i<8; i++) {
  //   let randomIpsum = ipsumSplit[Math.floor(Math.random() * ipsumSplit.length)]
  //   if(regEx.test(randomIpsum)){
  //     if(ipsumValue === ''){
  //       ipsumValue += `${randomIpsum} `;
  //     }
  //   } else {
  //     if(regEx.test(ipsumValue)) {
  //       ipsumValue += `${randomIpsum} `;
  //     }
  //   }
  // }

  // let ipsumMap = ipsumSplit.map(ipsum => {
  //   if(regEx.test(ipsum)) {
  //     return ipsum
  //   } else {
  //     return null;
  //   }
  // });

  console.log(ipsumValue.join(' '));

  if(lengthType === 'word') {

  } else if (lengthType === 'paragraph') {

  } else if (lengthType === 'list') {

  } else if (lengthType === 'bytes') {

  }

  console.log(lengthType + " " + quantity)
} 

submitBtn.addEventListener('click', (e) => {
  ispumGenerator();
})