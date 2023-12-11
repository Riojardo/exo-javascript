
/*function askTvSerie (){
    let favouriteTvSerie = {
        name: prompt("Entrez le nom du film"),
        year: prompt("Entrez la date de sortie"),
        cast: [],
     } 
    let n= prompt ("entrez le nombre de membre");
        for (let i = 0;i < n ; i++) {
        favouriteTvSerie.cast[i]= prompt("entrez le nom d'un membre");       
      }
}

console.log(favouriteTvSerie)

function randomizeCast(favouriteTvSerie){
    let newcast=[];
    for ( let i=0; i < favouriteTvSerie.cast.length; i++){
    newcast[i] = favouriteTvSerie.cast[Math.floor(Math.random()*favouriteTvSerie.cast.length)]}
    favouriteTvSerie.cast = newcast
    console.log(favouriteTvSerie)
}
askTvSerie()
console.log[randomizeCast()]*/

let favouriteTvSerie = {
    name: "",
    year: "",
    cast: [],
};

function askTvSerie() {
    favouriteTvSerie.name = prompt("Entrez le nom du film");
    favouriteTvSerie.year = prompt("Entrez la date de sortie");

    let n = prompt("Entrez le nombre de membres");
    for (let i = 0; i < n; i++) {
        favouriteTvSerie.cast[i] = prompt("Entrez le nom d'un membre");
    }
}

console.log(favouriteTvSerie);

function randomizeCast(favouriteTvSerie) {
    let newcast = [];
    for (let i = 0; i < favouriteTvSerie.cast.length; i++) {
        newcast[i] = favouriteTvSerie.cast[Math.floor(Math.random() * favouriteTvSerie.cast.length)];
    }
    favouriteTvSerie.cast = newcast;
    console.log(favouriteTvSerie);
}

askTvSerie();
randomizeCast(favouriteTvSerie);
