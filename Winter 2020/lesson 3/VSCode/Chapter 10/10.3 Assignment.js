/* Defining Table
 * Input: None from user.
 * Processing: Determine how many numbers in the array are even.
 * Output: Return the amount of even numbers in the array.
 * Author: Allie Gifford
 */

function countEvens(list) {
    let count = 0;
    //test for even numbers inside the array
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            count++

        }

    }
    return count;
}