/*let ecole = [
  "Richardson",
  "Webster",
  "Alexis",
  "Berlin",
  "Bouquet"
]

console.log(ecole[2]);
console.log(ecole.length);
console.log(ecole[ecole.length - 3]);
let newArray = ecole.shift();
console.log(newArray);
console.log(ecole);
let addName = ecole.push("Jean");
let sliceArray = ecole.slice(0, 3)
console.log(sliceArray);
console.log(ecole.indexOf("Bouquet"))

function include(){
  if(ecole.includes("Webster")){
    console.log("he is a teacher");
  }else{
    console.log("we do not find Webster")
  }
}

include();

ecole.push("Berlin")

let otherName = ecole.find((element) => element === "Berlin")
console.log(ecole)
console.log(otherName)

let otherNameFilter = ecole.filter((element) => element === "Berlin")
console.log(otherNameFilter)*/


let pays = new Set([
    "Haiti",
    "Congo",
    "USA",
    "Italie"
  ])
  pays.add("Alemagne")
  console.log(pays.size)
  //console.log(pays)
  
  pays.forEach((element) => {
    console.log(element)
  })
  
  console.log(pays.delete("USA"))
  console.log(pays)