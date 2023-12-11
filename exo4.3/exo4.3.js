let ArrayRandom = [];
function rand() {
    x = prompt("entrez une valeur :)");
    y = Math.floor(Math.random()* x);
    return y
  }

function multiRand() {
    n = rand ()
    for (i= 0; i < parseInt(n); i++)  
    ArrayRandom.push(Math.floor(Math.random()* n))
    alert(ArrayRandom)
}
multiRand ()