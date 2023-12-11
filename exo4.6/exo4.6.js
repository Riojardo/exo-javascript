function factorial(){
        let x =prompt("veuillez entrer un nombre")
        let result = 1; 
        for (let i= 2;i <= x;i++) {
        result *= i;
}
        return result
}
alert (factorial())

function factorial2(y){
    if (y <= 1) {
        return 1
    }else{
        y = y * (factorial2(y-1))
    }
    return y
}
console.log(factorial2(5))
