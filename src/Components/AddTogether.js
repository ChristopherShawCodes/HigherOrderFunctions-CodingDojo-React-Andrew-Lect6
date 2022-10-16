//Task: Add all of the numbers in an array and 
// return the SUM

let arr1 = [2,5,16,14,23]


let sum = 0
for(let i=0; i<arr1.length; i++){
    sum += arr1[i]
}

console.log(sum)
//returns 60 the sum of 2+5+16+14+23 from the array

//--------------------------------------------------
// Same Task Using Reduce/ useReducer

let arr2 = [2,5,16,14,23]

// First Argument is an accumulator. A variable that accumulates. Much like a SUM.
// Second Argument is for VALUE, in this case we are using NUM
const sum2 = arr2.reduce((acc,num)=>(
    acc + num
))

console.log(sum2)
//returns 60 the sum of 2+5+16+14+23 from the array
//-----------------------------------------------------