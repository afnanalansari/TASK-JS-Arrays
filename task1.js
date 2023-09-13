
const myArray = [];
myArray.push('apple', 'banana', 'cherry');
console.log(myArray[0]); //print first element
console.log(myArray[myArray.length-1]); //print last element

myArray.splice(0,0,'mango'); //add element at 0
console.log(myArray); 

myArray.pop(myArray.length-1); //remove last element
console.log(myArray); 
myArray.splice(0,myArray.length); //another way to empty
console.log(myArray); 


const numbers =[5, 10, 15, 20, 25];
numbers.splice(1,1);
console.log(numbers); 




function readLength(arr)
{
    return arr.length;
}

console.log(readLength(numbers));


const temperatures =[72, 68, 72, 80, 76];
console.log(Math.max(...temperatures)); //returns max number

let find = myArray.includes('banana');

// if (find === true){
//     console.log('true');
// }else {
//     console,log('false');
// }

find ?  console.log('true') :  console.log('false')
