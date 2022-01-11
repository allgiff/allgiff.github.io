/* Defining Table
 * Input: None from user. 
 * Processing: Determine if length of array is even or odd, and use that info to find the middle number.
 * Output: Return the middle number if odd or sum of middle numbers if even. 
 * Author: Allie Gifford
 * Done in class
 */


//Find the middle element of an array if the array has an even amount of numbers get the average of 2.
function getMiddle(list) {
    let arrayLength = list.length;
    //test if array length is even
    if (arrayLength % 2 == 0) {
        let index1 = arrayLength / 2;
        let index2 = index1 - 1;
        let num1 = list[index1];
        let num2 = list[index2];
        return (num1 + num2) / 2;
    }
    else {
        let index = Math.floor(arrayLength / 2);
        return list[index];
    }
}