const notesAvailable = new Map();
notesAvailable.set("2000", 10);
notesAvailable.set("500", 10);
notesAvailable.set("200", 10);
notesAvailable.set("100", 10);
notesAvailable.set("50", 10);
let returningMap = new Map();
function getDenomination(inputAmt) {
  for (let [key, value] of notesAvailable) {
    if (inputAmt >= +key) {
      if (inputAmt % key === 0) {
        returningMap.set(key, Math.floor(inputAmt / key));
        break;
      } else {
        returningMap.set(key, Math.floor(inputAmt / key));
        getDenomination(inputAmt % key);
      }
      break;
    }
  }
  console.log("returningMap", returningMap);
}
getDenomination(7856);
