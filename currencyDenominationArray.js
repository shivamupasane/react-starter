const prompt = require("prompt-sync")();
const denominationArray = new Array(
  "2000",
  "500",
  "200",
  "100",
  "50",
  "10",
  "5"
);
const minDenomination = Math.min(...denominationArray);
const notesCountArray = new Array();
const amountEntered = prompt("Please enter amount ");
getMinMax(amountEntered);
function getDenominationMinNotes(inputAmount) {
  let actualInput = (remainAmt = inputAmount);
  for (let i = 0; i < denominationArray.length; i++) {
    notesCountArray.push(Math.floor(remainAmt / denominationArray[i]));
    remainAmt = remainAmt % denominationArray[i];
  }
  console.log(`MINIMUM NO. OF NOTES\n`);
  for (let i = 0; i < denominationArray.length; i++) {
    console.log(`${denominationArray[i]} X ${notesCountArray[i]}\n`);
  }
  console.log(`Change not possible  =  ${remainAmt}\n`);
  console.log(`Total  =  ${actualInput}\n`);
}
function getDenominationMaxNotes(inputAmount) {
  console.log(`MAXIMUM NO. OF NOTES in ${minDenomination}\n`);
  console.log(
    `${minDenomination} X ${Math.floor(inputAmount / minDenomination)} = ${
      minDenomination * Math.floor(inputAmount / minDenomination)
    }\n`
  );
  console.log(
    `Change not possible  =  ${
      inputAmount - minDenomination * Math.floor(inputAmount / minDenomination)
    }\n`
  );
  console.log(`Total  =  ${inputAmount}\n`);
}
function getMinMax(inAmt) {
  getDenominationMinNotes(inAmt);
  getDenominationMaxNotes(inAmt);
}
