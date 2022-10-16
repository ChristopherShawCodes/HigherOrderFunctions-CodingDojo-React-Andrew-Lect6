
// #1 Remove all of the ODD NUMBERS with MAP
// #2 Remove all of the ODD NUMBERS with Filter

// #1-MAP-------------------------------------------------------------------------------------------------------------------

let arr1 = [2,5,16,14,23]

let newArr = []
for(let i=0; i<arr1.length; i++){
    //is this number even?
    if (arr1[i] % 2  == 0){
        // great, add it to the new array
        newArr.push(arr1[i])
    }
}


console.log(newArr)
//results [2,16,14]

//-------------------------------------------------------------------------------------------------------------------------
// Modulo: 
// Divide the number on the left by the
// number on the right , result is the remainder.

//Filter Even: 
    // if (arr1[i] % 2  == 0)
//Filter Odd:
    // if (arr1[i] % 23 == 0)

// EXAMPLES:
// 10 % 3 = 1
// 10 % 2 = 0

// 1. 10/3 = 3 with a remainder of 1 so the result is 1
// 2. 10/2 = 0 10 can be divided evenly by 2 with NO REMAINDER so the result is 0
//--------------------------------------------------------------------------------------------------------------------------------

// #2-FILTER--------------------------------------------------------------------------------------------------------------------

let arr2 = [2,5,16,14,23]
//using () instead of {} so no RETURN statement is needed
const newArr2 = arr2.filter((num)=>(
    num % 2 == 0
))

console.log(newArr2)
//------------------------------------------------------------------------------------------------------------------------------------
// Same Example with a RETURN statement using {}

let arr3 = [2,5,16,14,23]
const newArr3 = arr3.filter((num)=>{
    return num % 2 == 0
})

console.log(newArr3)

//---------------------------------------------------------------------------------------------------------------------------------------

//Task: Add all of the numbers in an array and return the SUM

let arr1 = [2,5,16,14,23]


let sum = 0
for(let i=0; i<arr1.length; i++){
    sum += arr1[i]
}

console.log(sum)
//returns 60 the sum of 2+5+16+14+23 from the array

//-------------------------------------------------------------------------------------------------------------------------------------------
// Same Task Using Reduce/ useReducer

let arr2 = [2,5,16,14,23]

// First Argument is an accumulator. A variable that accumulates. Much like a SUM.
// Second Argument is for VALUE, in this case we are using NUM
const sum2 = arr2.reduce((acc,num)=>(
    acc + num
))

console.log(sum2)
//returns 60 the sum of 2+5+16+14+23 from the array
//--------------------------------------------------------------------------------------------------------------------------------------------
