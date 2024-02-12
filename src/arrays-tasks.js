/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {array} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
  const length = end - start + 1;
  const arr = Array.from('');
  arr.length = length;
  let current = start - 1;
  arr.fill(0);
  return arr.map(() => {
    function setVal() {
      current += 1;
      return current;
    }
    return setVal(current);
  });
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
  const arr = [];
  if (arr1.length >= arr2.length) {
    arr.length = arr1.length;
  } else {
    arr.length = arr2.length;
  }
  arr.fill(0);
  return arr.map(() => {
    function sum(a = 0, b = 0) {
      return a + b;
    }
    return sum(arr1.shift(), arr2.shift());
  });
}

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {array} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {array} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
  const newarr = arr.filter((element) => element === item);
  return newarr.length;
}

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
  const newarr = arr.filter((element) => element);
  return newarr;
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  return arr.map((el) => el.length);
}

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {array} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(arr) {
  const ans = arr.length
    ? arr.reduce((average, currentValue) => average + currentValue) / arr.length
    : 0;
  return Number.isInteger(ans) ? ans : Number(ans.toFixed(2));
}

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {array} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
  const len = arr[0].length;
  const isEqual = (value) => value.length === len;
  return arr.every(isEqual);
}

/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {array} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
  const isEqual = (value, index) => value === index;
  return arr.some(isEqual);
}

/**
 * Inserts the item into specified array at specified index.
 *
 * @param {array} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

/**
 * Returns the n first items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
  return n > 0 ? arr.slice(-n) : [];
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {array} arr - The input array.
 * @return {array} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {array} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
  const set = new Set(arr);
  return [...set];
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {array} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(/* n, size */) {
  throw new Error('Not implemented');
}

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {array} nestedArray - The nested array to be flattened.
 * @return {array} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
  return nestedArray.flat(5);
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {array} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {array} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
  return arr.reduce(
    (subTotal, current) => subTotal + (current[0] - current[1]),
    0
  );
}

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {array} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {array} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
  const newArr = [];
  arr.map((element, index) => {
    if (index % chunkSize === 0) {
      const ind = Math.trunc(index / chunkSize);
      newArr[ind] = [];
      newArr[ind].push(element);
    } else {
      const ind = Math.trunc(index / chunkSize);
      newArr[ind].push(element);
    }
    return newArr;
  });
  return newArr;
}

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {array} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
  const arr = new Array(len);
  arr.fill(0);
  let num = -1;
  return arr.map(() => {
    function changeEl() {
      num += 2;
      return num;
    }
    return changeEl();
  });
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {array} arr - The input multidimensional array
 * @param {array} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices(arr, indices) {
  return indices.reduce((element, current) => {
    return element[current];
  }, arr);
}

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {array} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
  const count = arr.length;
  const newarr = arr.filter((element) => element);
  return count - newarr.length;
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {array} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const arr = new Array(n);
  arr.fill(0);
  return arr.map((element, index) => {
    function addArr() {
      const newarr = new Array(n);
      newarr.fill(0);
      newarr.splice(index, 1, 1);
      return newarr;
    }
    return addArr(index);
  });
}

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {array} numbers - The array of numbers.
 * @return {array} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
  const newarr = numbers.map((element, index) => {
    function checkVal(ind) {
      if (element % 2 !== 0) return ind;
      return null;
    }
    return checkVal(index);
  });
  return newarr.filter((element) => element === 0 || element);
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
  return arr.map(
    (element) => `#${element.toString(16).padStart(6, 0).toUpperCase()}`
  );
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {array} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {array} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
  return arr1
    .map((element) => {
      if (arr2.includes(element)) return element;
      return null;
    })
    .filter((element) => element);
}

/**
 * Finds the length of the longest increasing subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => 3
 */
function findLongestIncreasingSubsequence(nums) {
  let count = 1;
  let temp = nums[0];
  const sequenceArr = nums.map((element) => {
    if (element > temp) {
      temp = element;
      count += 1;
    } else {
      temp = element;
      count = 1;
    }
    return count;
  });
  return Math.max(...sequenceArr);
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr - The input array
 * @return {array}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((element, index, array) => {
    function addArr() {
      const newarr = new Array(index + 1);
      newarr.fill(array[index]);
      return newarr;
    }
    return addArr();
  });
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
  let outputArr = [];
  if (n >= 0) {
    outputArr = arr.toSpliced(0, n + 1);
    outputArr.splice(outputArr.length, 0, ...arr.slice(0, n + 1));
  } else {
    outputArr = arr.toSpliced(0, Math.abs(n));
    outputArr.splice(outputArr.length, 0, ...arr.slice(0, Math.abs(n)));
  }
  return outputArr;
}

/**
 * Sorts digit names.
 *
 * @param {array} arr - The input array.
 * @return {array} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const newarr = arr.map((element) => numbers.indexOf(element));
  return newarr.sort((a, b) => a - b).map((element) => numbers[element]);
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {array} arr - The input array.
 * @return {array} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
  const newarr = [];
  if (arr.length % 2 === 0) {
    const middle = arr.length / 2;
    arr.map((element, index) => {
      return index < middle
        ? newarr.splice(index + middle, 0, element)
        : newarr.splice(index - middle, 0, element);
    });
  } else {
    const middle = Math.floor(arr.length / 2);
    arr.map((element, index) => {
      if (index < middle) newarr.splice(middle + 1 + index, 0, element);
      else if (index > middle) newarr.splice(index - 1 - middle, 0, element);
      else newarr.splice(index - middle, 0, element);
      return newarr;
    });
  }
  return newarr;
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
