let list1 = [1,2,3,4,5,56,9,13,106];
min = Infinity;
max= -Infinity;
alert("le premiere element de la list est " + list1[0] + " et le dernier element de la lists est " + list1[list1.length - 1]);

for (let elem of list1) {
    if (elem < min)
    min = elem;
    if (elem > max)
    max = elem;

}
console.log(min);
console.log(max);
/*
minValue = Infinity;
maxValue = -Infinity;
for (item of array) {
    // Find minimum value
    if (item < minValue)
    minValue = item;
                
    // Find maximum value
    if (item > maxValue)
    maxValue = item;
}
*/