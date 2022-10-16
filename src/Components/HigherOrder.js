//Higher order functions work on ARRAYS exclusively


//basic forLoop example

let arr1= [2,5,16,14,23]

for(let i=0; i<arr1.length;i++){
    console.log(`Index:${i} Value:${arr1[i]}`)
}

// Higher order function example AKA glorified ForLoop
// The forEach function runs on the array
//  it takes in a call back function as the argument
// the callback function takes 2 parameters
// 1 is the element we are on 
// 2 is index position of the item


arr1.forEach((element,index)=>{
    // console.log(`Index:${i} Value:${arr1[i]}`) *re-configured*
    console.log(`Index:${index} Value:${arr1[element]}`)
})


//-----------------------------------------------------

let arr2 = [2,5,16,4,9]

for(let i=0; i<arr1.length;i++){
    arr2[i] *= 2
}

console.log(arr2)

//------------------------------------------------------
//MAP EXAMPLE
//map returns a new copy of the same array******
//element can be called anything it is simply a variable
let arr3 = [2,5,16,4,9]
//return statement needed if using {} but not if using ()
const arr = arr3.map((element)=>{
    return element*2
})

console.log(arr)
//--------------------------------------------------------
//Same Example Using Implicit Return
let arr4 = [2,5,16,4,9]
const arrNew = arr4.map((element)=> element * 2)

console.log(arrNew)
//--------------------------------------------------------
//Same Example Using arr5 as variable name instead of element
let arr5 = [1,3,5,7,9]
const arrTest = arr5.map((arr5) => arr5 * 2)
console.log(arrTest)
//--------------------------------------------------------


