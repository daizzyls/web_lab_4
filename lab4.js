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

 
 function flattenArray(nestedArray) {
   return nestedArray.flat(Infinity);
 }
 
 function flattenArrayCycle(nestedArray) {
   const result = [];
 
   for (let i = 0; i < nestedArray.length; i++) {
     if (Array.isArray(nestedArray[i])) {
       const inner = flattenArrayCycle(nestedArray[i]);
       for (let j = 0; j < inner.length; j++) {
         result.push(inner[j]);
       }
     } else {
       result.push(nestedArray[i]);
     }
   }
 
   return result;
 }
 
 
 function selectMany(arr, childrenSelector) {
   return arr.flatMap(childrenSelector);
 }
 
 function selectManyCycle(arr, childrenSelector) {
   const result = [];
 
   for (let i = 0; i < arr.length; i++) {
     const children = childrenSelector(arr[i]);
     for (let j = 0; j < children.length; j++) {
       result.push(children[j]);
     }
   }
 
   return result;
 }
 

 function calculateBalance(arr) {
   return arr.reduce((acc, [income, expense]) => acc + income - expense, 0);
 }
 
 function calculateBalanceCycle(arr) {
   let balance = 0;
 
   for (let i = 0; i < arr.length; i++) {
     balance += arr[i][0] - arr[i][1];
   }
 
   return balance;
 }
 
 
 function createChunks(arr, chunkSize) {
   return Array.from(
     { length: Math.ceil(arr.length / chunkSize) },
     (_, i) => arr.slice(i * chunkSize, (i + 1) * chunkSize)
   );
 }
 
 function createChunksCycle(arr, chunkSize) {
   const result = [];
 
   for (let i = 0; i < arr.length; i += chunkSize) {
     const chunk = [];
     for (let j = i; j < i + chunkSize && j < arr.length; j++) {
       chunk.push(arr[j]);
     }
     result.push(chunk);
   }
 
   return result;
 }

 function generateOdds(len) {
   return Array.from({ length: len }, (_, i) => 2 * i + 1);
 }
 
 function generateOddsCycle(len) {
   const result = [];
 
   for (let i = 0; i < len; i++) {
     result.push(2 * i + 1);
   }
 
   return result;
 }
 
 function getElementByIndices(arr, indices) {
   return indices.reduce((current, index) => current[index], arr);
 }
 
 function getElementByIndicesCycle(arr, indices) {
   let current = arr;
 
   for (let i = 0; i < indices.length; i++) {
     current = current[indices[i]];
   }
 
   return current;
 }
 
 function getFalsyValuesCount(arr) {
   return arr.filter((item) => !item).length;
 }
 
 function getFalsyValuesCountCycle(arr) {
   let count = 0;
 
   for (let i = 0; i < arr.length; i++) {
     if (!arr[i]) {
       count++;
     }
   }
 
   return count;
 }
 
 
 function getIdentityMatrix(n) {
   return Array.from({ length: n }, (_, row) =>
     Array.from({ length: n }, (__, col) => (row === col ? 1 : 0))
   );
 }
 
 function getIdentityMatrixCycle(n) {
   const matrix = [];
 
   for (let i = 0; i < n; i++) {
     const row = [];
     for (let j = 0; j < n; j++) {
       row.push(i === j ? 1 : 0);
     }
     matrix.push(row);
   }
 
   return matrix;
 }
 
 
 function getIndicesOfOddNumbers(numbers) {
   return numbers.reduce((acc, num, index) => {
     if (num % 2 !== 0) {
       acc.push(index);
     }
     return acc;
   }, []);
 }
 
 function getIndicesOfOddNumbersCycle(numbers) {
   const result = [];
 
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
       result.push(i);
     }
   }
 
   return result;
 }
 
 
 function getHexRGBValues(arr) {
   return arr.map((num) => '#' + num.toString(16).toUpperCase().padStart(6, '0'));
 }
 
 function getHexRGBValuesCycle(arr) {
   const result = [];
 
   for (let i = 0; i < arr.length; i++) {
     const hex = arr[i].toString(16).toUpperCase().padStart(6, '0');
     result.push('#' + hex);
   }
 
   return result;
 }

 function getMaxItems(arr, n) {
   return [...arr].sort((a, b) => b - a).slice(0, n);
 }
 
 function getMaxItemsCycle(arr, n) {
   const copy = [...arr];
   const result = [];
 
   for (let k = 0; k < n && copy.length > 0; k++) {
     let maxIndex = 0;
     for (let j = 1; j < copy.length; j++) {
       if (copy[j] > copy[maxIndex]) {
         maxIndex = j;
       }
     }
     result.push(copy[maxIndex]);
     copy.splice(maxIndex, 1);
   }
 
   return result;
 }

 function findCommonElements(arr1, arr2) {
   return arr1.filter((item) => arr2.includes(item));
 }
 
 function findCommonElementsCycle(arr1, arr2) {
   const result = [];
 
   for (let i = 0; i < arr1.length; i++) {
     for (let j = 0; j < arr2.length; j++) {
       if (arr1[i] === arr2[j]) {
         result.push(arr1[i]);
         break;
       }
     }
   }
 
   return result;
 }
 
 function findLongestIncreasingSubsequence(nums) {
   return nums.reduce(
     (acc, num, i) => {
       const current = i > 0 && num > nums[i - 1] ? acc.current + 1 : 1;
       return { current, max: Math.max(acc.max, current) };
     },
     { current: 0, max: 0 }
   ).max;
 }
 
 function findLongestIncreasingSubsequenceCycle(nums) {
   if (nums.length === 0) {
     return 0;
   }
 
   let current = 1;
   let max = 1;
 
   for (let i = 1; i < nums.length; i++) {
     if (nums[i] > nums[i - 1]) {
       current++;
     } else {
       current = 1;
     }
     if (current > max) {
       max = current;
     }
   }
 
   return max;
 }
 
 
 function propagateItemsByPositionIndex(arr) {
   return arr.flatMap((item, i) => Array(i + 1).fill(item));
 }
 
 function propagateItemsByPositionIndexCycle(arr) {
   const result = [];
 
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j <= i; j++) {
       result.push(arr[i]);
     }
   }
 
   return result;
 }
 

 function shiftArray(arr, n) {
   const len = arr.length;
 
   if (len === 0) {
     return [];
   }
 
   const shift = ((n % len) + len) % len;
 
   return arr.slice(len - shift).concat(arr.slice(0, len - shift));
 }
 
 function shiftArrayCycle(arr, n) {
   const len = arr.length;
 
   if (len === 0) {
     return [];
   }
 
   const shift = ((n % len) + len) % len;
   const result = [];
 
   for (let i = 0; i < len; i++) {
     result[(i + shift) % len] = arr[i];
   }
 
   return result;
 }
 

 function sortDigitNamesByNumericOrder(arr) {
   const names = ['zero', 'one', 'two', 'three', 'four',
                  'five', 'six', 'seven', 'eight', 'nine'];
 
   return [...arr].sort((a, b) => names.indexOf(a) - names.indexOf(b));
 }
 
 function sortDigitNamesByNumericOrderCycle(arr) {
   const names = ['zero', 'one', 'two', 'three', 'four',
                  'five', 'six', 'seven', 'eight', 'nine'];
   const result = [];
 
   for (let d = 0; d < names.length; d++) {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] === names[d]) {
         result.push(arr[i]);
       }
     }
   }
 
   return result;
 }
 

 function swapHeadAndTail(arr) {
   const len = arr.length;
   const half = Math.floor(len / 2);
 
   return [
     ...arr.slice(len - half),
     ...arr.slice(half, len - half),
     ...arr.slice(0, half),
   ];
 }
 
 function swapHeadAndTailCycle(arr) {
   let len = arr.length;
   let half = Math.floor(len / 2);
   let result = [];
 
   for (let i = len - half; i < len; i++) {
     result.push(arr[i]);
   }
 
   if (len % 2 !== 0) {
     result.push(arr[half]);
   }
 
   for (let i = 0; i < half; i++) {
     result.push(arr[i]);
   }
 
   return result;
 }