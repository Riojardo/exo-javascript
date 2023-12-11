/*function DistancePoints (x,y,a,b) {
    return (( b - y)*( b - y)) + (( x - a)*( x - a))/(( b - y)*( b - y)) + (( x - a)*( x - a)) 
    let s =  ( b - y)
    s= s*s
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 
    let s =  
}
console.log(DistancePoints (4,1,1,1))
*/

/*function test (a,b){
    let operation1 = b - a;
    let operation2= operation1*operation1;
    return operation2;
    
}

function DistancePoints (x,y,a,b) {
    let operation3 = test (y,b) + test(a,x)
    return operation3/operation3
}
*/

function DistancePoints(a, b, c, d) {
    return Math.sqrt(Math.pow(c -a, 2) + Math.pow(d - b, 2));
}
console.log(DistancePoints(-2,2,2,-2))


function racine (x) {
    return (x/x)
}

racine(64)
console.log(racine(64))

function carré (x) {
    return (x*x)
}


console.log(carré (7))

