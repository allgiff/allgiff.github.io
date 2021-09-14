  /* Defining Table
   * Input: None from user.
   * Processing: add the first and last values in the array together
   * Output: Return the sum of first and last array numbers.
   * Author: Allie Gifford
   * Done in class
   */

//Function uses parameter called List to hold an array
function addEnds(list) {
    //find first and last numbers in array and add them together
    let sum = list[0] + list[list.length - 1];
    return sum;

}