
let ArrayRandom= ["BOb","arthur","joséphine","phillipe","antoine","marc","cécile","francois","carl","sacha","emily"]

let newArray =[]
function pickLearner(ArrayRandom,n) {
    newArray = []
    for (i= 0; i < parseInt(ArrayRandom.length); i++){
    newArray[i] = ArrayRandom [Math.floor(Math.random()*ArrayRandom.length)]
    }   
    console.log [newArray]
    alert (newArray)}


pickLearner(ArrayRandom,7)

console.log [newArray]