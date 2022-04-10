let prabinMass = 86;
let ramMass = 70;

let prabinHeight = 150;
let ramHeight = 142;

let prabinsBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHigherBMi = prabinsBMI > ramBMI;

console.log(prabinsBMI);
console.log(ramBMI);

console.log(prabinHigherBMi);