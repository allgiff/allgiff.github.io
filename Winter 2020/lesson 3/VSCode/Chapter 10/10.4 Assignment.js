/* Defining Table
 * Input: None from user.
 * Processing: loop original array to multiply all array values by three. Put new values in their own array and multiply. 
 * Output: Return the new array to the call point
 * Author: Allie Gifford
 */

function multiply(list, multiplier) {
    let array = list;
    let multi = multiplier;
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray[i] = array[i] * multi;


    }
    return newArray;
}