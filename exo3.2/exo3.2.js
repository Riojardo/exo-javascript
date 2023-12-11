let list = [1,2,3,4,5,56,9,13];
let y = 0;
let x = 0;
console.log (list.length);
for (let i = 0 ; i < list.length ; i++){
        y += parseInt(list[i]);
        
}
x = y/(list.length)
alert(x)
