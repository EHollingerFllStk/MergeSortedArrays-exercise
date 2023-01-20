//////////Interview Question/////////////////

//const mergeSortedArrays = ([0, 3, 4, 31], [3, 4, 6, 30]);

///Can we have repeated numbers?
///loops through one and push into a newArray
///loops through the second and push into newArray
///sort the array ascending(if not already sorted)
//This would be costly - need to clean it up with functions to decrease the expense




//split two arrays
// const arr1 = mergeSortedArrays[0].toString();
// //const arr2 = mergeSortedArrays.splice([1])
// console.log(arr1)
//console.log(arr2)
//create new array
//loop through mergeSortedArrays[0] and .push() to new array
//loop through 2nd array[1] and push into newArray
//sort array?
//console.log merged arrays
//return mergedArrays

//Solution code:

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item)      //
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))

//Caveat: this is not most efficient and could utilize functions to do this. May not have time but if you communicate this to interviewer - it show's you are thinkning about it.