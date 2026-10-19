'use strict'

//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

function maximumOfTwo(a, b) {

 return a > b ? a : b;

}

/**

 * Creates an array of integers from the specified start to end (inclusive).

 *

 * @param {number} start - The first number of an array.

 * @param {number} end - The last number of an array.

 * @return {number[]} - An array of integers.

 *

 * @example

 *  getIntervalArray(1, 5) => [ 1, 2, 3, 4, 5 ]

 *  getIntervalArray(-2, 2) => [ -2, -1, 0, 1, 2 ]

 *  getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]

 *  getIntervalArray(3, 3) => [ 3 ]

 */

function getIntervalArrayCycle(start, end) {

 let arr = [];

 let temp_start = start;

 for (; temp_start <= end; ++temp_start){

  arr.push(temp_start);

 }

 return arr;

}

console.log(getIntervalArrayCycle(1, 100));

console.log(getIntervalArrayCycle(5, 5));


function getIntervalArrayMethod(start, end) {


 let len = end - start + 1;

 return Array.from({ length : len }, (_, index) => start + index);

}

console.log(getIntervalArrayMethod(1, 100));

console.log(getIntervalArrayMethod(5, 5));


/**

 * Returns a new array where each element is the sum of the corresponding elements

 * from two arrays. Arrays can have different lengths.

 *

 * @param {number[]} arr1 - The first array.

 * @param {number[]} arr2 - The second array.

 * @return {number[]} - An array containing the sum of corresponding elements.

 *

 * @example

 *  sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]

 *  sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]

 *  sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]

 */


function sumArraysMethod(arr1, arr2) {

 let maximum = maximumOfTwo(arr1.length, arr2.length);



 return Array.from({ length: maximum }, (_, ind) => {

  const first = arr1[ind] ?? 0;

  const second = arr2[ind] ?? 0;

  return first + second;

 })


}


function sumArraysCycle(arr1, arr2) {

 let maximum = maximumOfTwo(arr1.length, arr2.length);

 let result = [];


 for (let i = 0; i < maximum; ++i){

  if (arr1[i] && arr2[i]) {

   result.push(arr1[i] + arr2[i]);

  }

  else if (!arr1[i]) { result.push(arr2[i]); }

  else if (!arr2[i]) { result.push(arr1[i]); }

 }

 return result;

}

console.log(sumArraysCycle([1, 2, 3, 4, 5, 10], [9, 8, 7, 6, 5, 0, 11]));

console.log(sumArraysMethod([1, 2, 3, 4, 5, 10], [9, 8, 7, 6, 5, 0, 11]));


/**

 * Returns an index of the specified element in array or -1 if element is not found.

 *

 * @param {any[]} arr - The input array.

 * @param {any} value - Element to search.

 * @return {number} - An index of the specified element.

 *

 * @example

 *  findElement(['Ace', 10, true], 10) => 1

 *  findElement(['Array', 'Number', 'string'], 'Date') => -1

 *  findElement([0, 1, 2, 3, 4, 5], 5) => 5

 */


function findElementMethod(arr, elem) {

 return arr.indexOf(elem);


}


function findElementCycle(arr, elem) {

 for (let i = 0; i < arr.length; ++i){

  if (arr[i] === elem) { return i }


 }

 return -1;

}


console.log(findElementCycle([1, 2, 3, 4, 6, 163], 163));

console.log(findElementMethod([1, 2, 3, 4, '163ATMYNECK'], '163ONMYNECK'));

/**

 * Returns a number of all occurrences of the specified item in an array.

 *

 * @param {any[]} arr - The input array.

 * @param {any} item - Element to search.

 * @return {number} - Number of found items.

 *

 * @example

 *  findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3

 *  findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0

 *  findAllOccurrences([ 'a','b','c','c' ], 'c') => 2

 *  findAllOccurrences([ null, undefined, null ], null) => 2

 *  findAllOccurrences([ true, 0, 1, 'true' ], true) => 1

 */

function findAllOccurrencesMethod(arr, item) {


 return arr.filter(element => element === item).length;


}


function findAllOccurrencesCycle(arr, item) {

 let result = 0;

 for (let i = 0; i < arr.length; ++i){

  if (arr[i] === item) { ++result; }

 }

 return result;

}

console.log(findAllOccurrencesCycle([true, undefined, 'null'], true));

console.log(findAllOccurrencesMethod([true, undefined, 'true'], true));



/**

 * Removes falsy values from the specified array.

 * Falsy values: false, null, 0, "", undefined, and NaN.

 *

 * @param {any[]} arr - The input array.

 * @return {any[]} - The array without falsy values.

 *

 * @example

 *  removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]

 *  removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]

 *  removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]

 */

 function removeFalsyValuesCycle(arr) {
   const result = [];

   for (let i = 0; i < arr.length; i++) {
     if (arr[i]) {
       result.push(arr[i]);
     }
   }

   return result;
 }


 function removeFalsyValuesMethod(arr) {
   return arr.filter(Boolean);
 }


/**

 * Returns an array containing the lengths of each string in a specified array of strings.

 *

 * @param {string[]} arr - The input array.

 * @return {number[]} - The array of string lengths.

 *

 * @example

 *  getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]

 *  getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]

 */

 function getStringsLengthCycle(arr) {
   const result = [];

   for (let i = 0; i < arr.length; i++) {
     result.push(arr[i].length);
   }

   return result;
}

function getStringsLengthMethod(arr) {
  return arr.map(str => str.length);
}


/**

 * Returns the average of all items in the specified array of numbers.

 * The result should be rounded to two decimal places.

 *

 * @param {number[]} arr - The input array

 * @return {number} - The average of all items

 *

 * @example

 *  getAverage([]) => 0

 *  getAverage([ 1, 2, 3 ]) => 2

 *  getAverage([ -1, 1, -1, 1 ]) => 0

 *  getAverage([ 1, 10, 100, 1000 ]) => 277,75

 *  getAverage([ 2, 3, 3 ]) => 2,67

 */

 function getAverageCycle(arr) {
   if (arr.length === 0) {
     return 0;
   }

   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
   }

   return Number((sum / arr.length).toFixed(2));
 }

 function getAverageMethod(arr) {
   if (arr.length === 0) {
     return 0;
   }

   const sum = arr.reduce((acc, num) => acc + num, 0);

   return Number((sum / arr.length).toFixed(2));
 }

/**

 * Checks if all strings in an array have the same length.

 *

 * @param {string[]} arr - The array of strings to be checked.

 * @return {boolean} - True if all strings have the same length, false otherwise.

 *

 * @example

 *  isSameLength(['orange', 'banana', 'cherry']) => true

 *  isSameLength(['cat', 'dog', 'elephant']) => false

 */

function isSameLengthCycle(arr) {
  for (let i = 0; i < arr.length; ++i){
    if (arr[i].length !== arr[0].length) {
      return false;
    }
  }
  return true;
}

function isSameLengthMethod(arr) {
  return arr.every(str => str.length === arr[0].length);
}

/**

 * Checks if there are elements in the array where the value is equal to its index.

 *

 * @param {number[]} arr - The array of elements to be checked.

 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.

 *

 * @example

 *  isValueEqualsIndex([0, 1, 2, 3, 4]) => true

 *  isValueEqualsIndex([2, 1, 0, 4, 5]) => true

 *  isValueEqualsIndex([10, 20, 30, 40, 50]) => false

 */

 function isValueEqualsIndexCycle(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === i) {
       return true;
     }
   }
   return false;
 }

function isValueEqualsIndexMethod(arr) {
  return arr.some((value, index) => value === index);
}

/**

 * Inserts the item into specified array at specified index.

 *

 * @param {any[]} arr - The input array.

 * @param {any} item - The item to insert.

 * @param {number} index - Specified index.

 * @return {any[]}

 *

 * @example

 *  insertItem([ 1, 3, 4, 5 ], 2, 1) => [ 1, 2, 3, 4, 5 ]

 *  insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]

 */

 function insertItemCycle(arr, newItem, index) {
   let result = [];
   for (let i = 0; i < index; i++) {
     result.push(arr[i]);
   }

   result.push(newItem);

   for (let i = index; i < arr.length; i++) {
     result.push(arr[i]);
   }
   return result;
 }

 function insertItemMethod(arr, newItem, index) {
   const result = [...arr];
   result.splice(index, 0, newItem);
   return result;
 }

/**

 * Returns the n first items of the specified array.

 *

 * @param {any[]} arr - The input array.

 * @param {number} n - Number of items.

 * @return {any[]}

 *

 * @example

 *  getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]

 *  getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]

 *  getHead([ 'a', 'b', 'c', 'd'], 0) => []

 */
 function getHeadCycle(arr, n) {
   const result = [];

   for (let i = 0; i < n && i < arr.length; i++) {
     result.push(arr[i]);
   }

   return result;
 }

 function getHeadMethod(arr, n) {
   return arr.slice(0, n);
 }


/**

 * Returns the n last items of the specified array.

 *

 * @param {any[]} arr - The input array.

 * @param {number} n - Number of items.

 * @return {any[]}

 *

 * @example

 *  getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]

 *  getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]

 *  getTail([ 'a', 'b', 'c', 'd'], 0) => []

 */

 function getTailCycle(arr, n) {
   const result = [];
   const start = Math.max(arr.length - n, 0);

   for (let i = start; i < arr.length; i++) {
     result.push(arr[i]);
   }

   return result;
 }

 function getTailMethod(arr, n) {
   if (n === 0) {
     return [];
   }

   return arr.slice(-n);
 }


/**

 * Returns the doubled array - elements of the specified array

 * are repeated twice using original order.

 *

 * @param {any[]} arr - The input array.

 * @return {any[]} - The doubled array.

 *

 * @example

 *  doubleArray(['Ace', 10, true]) => ['Ace', 10, true, 'Ace', 10, true]

 *  doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]

 *  doubleArray([]) => []

 */
 function doubleArrayCycle(arr) {
   const result = [];

   for (let i = 0; i < arr.length; i++) {
     result.push(arr[i]);
   }

   for (let i = 0; i < arr.length; i++) {
     result.push(arr[i]);
   }

   return result;
 }

 function doubleArrayCycle2(arr) {
   const result = [];

   for (let i = 0; i < arr.length * 2; i++) {
     result.push(arr[i % arr.length]);
   }

   return result;
 }


/**

 * Concatenates all elements from specified array into single string with ',' delimiter.

 *

 * @param {any[]} arr - The input array.

 * @return {string} - The concatenated string.

 *

 * @example

 *  toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'

 *  toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'

 *  toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'

 */

 function toStringListMethod(arr) {
   return arr.join(',');
 }

function toStringListCycle(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

    if (i < arr.length - 1) {
      result += ',';
    }
  }

  return result;
}

/**

 * Returns array containing only unique values from the specified array.

 *

 * @param {any[]} arr - The input array.

 * @return {any[]} - The array with unique values.

 *

 * @example

 *  distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]

 *  distinct([ 'a', 'a', 'a', 'a' ]) => [ 'a' ]

 *  distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]

 *  distinct([]) => []

 */
 function distinctCycle(arr) {
   const result = [];
 
   for (let i = 0; i < arr.length; i++) {
     let isFound = false;
 
     for (let j = 0; j < result.length; j++) {
       if (result[j] === arr[i]) {
         isFound = true;
         break;
       }
     }
 
     if (!isFound) {
       result.push(arr[i]);
     }
   }
 
   return result;
 }
 
 function distinctMethod(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
 }


/**

 * Creates an n-dimensional array and fills it with zeros.

 *

 * @param {number} n - Depth of outter array (n > 0).

 * @param {number} size - Length of all arrays (size > 0).

 * @return {any[]} - The n-dimensional array filled with zeros.

 *

 * @example

 *  createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

 *  createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]

 *  createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]

 *  createNDimensionalArray(1, 1) => [0]

 */

function createNDimensionalArray() {


}


/**

 * Flattens a nested array into a single-level array.

 *

 * @param {any[]} nestedArray - The nested array to be flattened.

 * @return {any[]} - A single-level array.

 *

 * @example

 *  flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]

 *  flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']

 *  flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]

 */

function flattenArray() {


}


/**

 * Projects each element of the specified array to a sequence

 * and flattens the resulting sequences into one array.

 *

 * @param {any[]} arr - The input array

 * @param {Function} childrenSelector - A transform function to apply to each element

 *                   that returns an array of children

 * @return {any[]} - The flatted array

 *

 * @example

 *  selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>  [ 1, 2, 3, 4, 5, 6 ]

 *  selectMany(['one','two','three'], (x) => x.split('')) =>  ['o','n','e','t','w','o','t','h','r','e','e']

 */

function selectMany() {


}


/**

 * Every month, you record your income and expenses.

 * Expenses may be greater than income.

 * You need to calculate the final balance.

 *

 * @param {number[][]} arr - The input array [[income, expence], ...]

 * @return {number} - The final balance.

 *

 * @example

 *  calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6

 *  calculateBalance([ [ 10, 8 ], [ 1, 5 ] ]) => (10 - 8) + (1 - 5) = 2 + -4 = -2

 *  calculateBalance([]) => 0

 */

function calculateBalance() {


}


/**

 * Breaks an array into chunks of the specified size.

 *

 * @param {any[]} arr - The array to be broken into chunks.

 * @param {number} chunkSize - The size of each chunk.

 * @return {any[]} - An array of chunks.

 *

 * @example

 *  createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]

 *  createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]

 *  createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]

 */

function createChunks() {


}


/**

 * Generates an array of odd numbers of the specified length.

 *

 * @param {number} len - The length of an array.

 * @return {number[]} - An array of odd numbers.

 *

 * @example

 *  generateOdds(0) => []

 *  generateOdds(1) => [ 1 ]

 *  generateOdds(2) => [ 1, 3 ]

 *  generateOdds(5) => [ 1, 3, 5, 7, 9 ]

 */

function generateOdds() {


}


/**

 * Returns an element from the multidimensional array by the specified indices.

 *

 * @param {any[]} arr - The input multidimensional array

 * @param {number[]} indices - The array of indices

 * @return {any} - An element from the array

 *

 * @example

 *  getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1    (arr[0][0])

 *  getElementByIndices(['one','two','three'], [2]) => 'three' (arr[2])

 *  getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2    (arr[0][0][1])

 */

function getElementByIndices() {


}


/**

 * Returns the number of all falsy values in the specified array.

 *

 * @param {any[]} arr - The input array.

 * @return {number} - The number of all falsy values.

 *

 * @example

 * getFalsyValuesCount([]) => 0

 * getFalsyValuesCount([ 1, '', 3 ]) => 1

 * getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2

 * getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6

 */

function getFalsyValuesCount() {


}


/**

 * Creates an identity matrix of the specified size.

 *

 * @param {number} n - A size of the matrix.

 * @return {number[][]} - An identity matrix.

 *

 * @example

 *   getIdentityMatrix(1) => [[1]]

 *

 *   getIdentityMatrix(2) => [[1,0],

 *               [0,1]]

 *

 *               [[1,0,0,0,0],

 *               [0,1,0,0,0],

 *   getIdentityMatrix(5) => [0,0,1,0,0],

 *               [0,0,0,1,0],

 *               [0,0,0,0,1]]

 */

function getIdentityMatrix() {


}


/**

 * Returns an array containing indices of odd elements in the input array.

 *

 * @param {number[]} numbers - The array of numbers.

 * @return {number[]} - An array containing indices of odd elements.

 *

 * @example

 *  getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]

 *  getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []

 *  getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]

 */

function getIndicesOfOddNumbers() {


}


/**

 * Returns the array of RGB Hex strings from the specified array of numbers.

 *

 * @param {number[]} arr - The input array.

 * @return {string[]} - The array of RGB Hex strings.

 *

 * @example

 *  getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]

 *  getHexRGBValues([]) => []

 */

function getHexRGBValues() {


}


/**

 * Returns the n largest values from the specified array

 *

 * @param {number[]} arr - The input array

 * @param {number} n - Number of maximum values.

 * @return {number[]} - n largest values.

 *

 * @example

 *  getMaxItems([], 5) => []

 *  getMaxItems([ 1, 2 ], 1) => [ 2]

 *  getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]

 *  getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]

 *  getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]

 */

function getMaxItems() {


}


/**

 * Finds and returns an array containing only the common elements found in two arrays.

 *

 * @param {any[]} arr1 - The first array.

 * @param {any[]} arr2 - The second array.

 * @return {any[]} - An array containing common elements.

 *

 * @example

 *  findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]

 *  findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]

 *  findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []

 */

function findCommonElements() {


}


/**

 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.

 *

 * @param {number[]} nums - The array of integers.

 * @return {number} - The length of the longest increasing subsequence.

 *

 * @example

 *  findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3

 *  findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2

 *  findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3

 */

function findLongestIncreasingSubsequence() {


}


/**

 * Propagates every item in sequence its position times

 * Returns an array that consists of: one first item, two second items, three third items etc.

 *

 * @param {any[]} arr - The input array

 * @return {any[]}

 *

 * @example :

 * propagateItemsByPositionIndex([]) => []

 * propagateItemsByPositionIndex([ 1 ]) => [ 1 ]

 * propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]

 * propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c', null, null, null, null ]

 * propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]

 */

function propagateItemsByPositionIndex() {


}


/**

 * Shifts an array by n positions. If n is negative, the array is shifted to the left;

 * if positive, it is shifted to the right.

 *

 * @param {any[]} arr - The array to be shifted.

 * @param {number} n - The number of positions to shift the array elements.

 * @return {any[]} - The shifted array.

 *

 * @example

 *  shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]

 *  shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']

 *  shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]

 */

function shiftArray() {


}


/**

 * Sorts digit names.

 *

 * @param {string[]} arr - The input array.

 * @return {string[]} - Sorted array.

 *

 * @example

 *  sortDigitNamesByNumericOrder([]) => []

 *  sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]

 *  sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]

 *  sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']

 *  sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]

 */

function sortDigitNamesByNumericOrder() {


}


/**

 * Swaps the head and tail of the specified array:

 * the head (first half) of array move to the end, the tail (last half) move to the start.

 * The middle element (if exists) leave on the same position. *

 *

 * @param {any[]} arr - The input array.

 * @return {any[]} - The swapped array.

 *

 * @example

 *  [ 1, 2, 3, 4, 5 ]  => [ 4, 5, 3, 1, 2 ]

 *  \----/  \----/

 *   head   tail

 *

 *  swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]

 *  swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) => [ 5, 6, 7, 8, 1, 2, 3, 4 ]

 *  swapHeadAndTail([ 1 ]) => [ 1 ]

 *  swapHeadAndTail([]) => []

 *

 */

function swapHeadAndTail() {


}
