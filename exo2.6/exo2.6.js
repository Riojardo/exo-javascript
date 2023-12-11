




let day = prompt ("Enter a number between 1 and 7")

while (parseInt(day)>8 || parseInt(day)< 0) {
     if (parseInt(day)>8 || parseInt(day)< 0){ 
    day = prompt ("enter a valid number between 1 and 7")}
}
if (parseInt(day) == 1){
    console.log ("monday");
}else if (parseInt(day) == 2){
    console.log ("tuesday");
}else if (parseInt(day) == 3){
    console.log ("wednesday");
}else if (parseInt(day) == 4){
    console.log ("thursday");
}else if (parseInt(day) == 5){
    console.log ("friday");
}else if (parseInt(day) == 6){
    console.log ("saturday");
}else if (parseInt(day) == 7){
    console.log ("sunday");}

/*
let day = prompt ("Enter a number between 1 and 7")  

for (let i = 0; i < 1 && i >= 0 ; i = parseInt(day)/7) {
    if (parseInt(day)>7 || parseInt(day)< 1){
    day = prompt ("enter a valid number between 1 and 7");
    }else{ break;
    }
}
      
            if (parseInt(day) == 1){
                console.log ("monday");
            }else if (parseInt(day) == 2){
                console.log ("tuesday");
            }else if (parseInt(day) == 3){
                console.log ("wednesday");
            }else if (parseInt(day) == 4){
                console.log ("thursday");
            }else if (parseInt(day) == 5){
                console.log ("friday");
            }else if (parseInt(day) == 6){
                console.log ("saturday");
            }else if (parseInt(day) == 7){
                console.log ("sunday");}
  */          

