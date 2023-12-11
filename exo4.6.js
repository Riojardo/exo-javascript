/*function facto (x){
    if (x<0){
       return (x * facto ( x-1))
    }
}
console.log(facto(7))*/



/*function rand() {
    x = prompt("entrez une valeur :)");
    y = Math.floor(Math.random()*((x-1)+1));
    return y
  }

  function facto (x){
    if (x >= 1){
       return x * facto ( x-1);
    }
    else {
        return 1;
    }
 
}*/

function facto (x){
    for ( i= 1 ; i <= x; i++){
    x *= i-1 }
    return x
}

console.log(facto(5));
