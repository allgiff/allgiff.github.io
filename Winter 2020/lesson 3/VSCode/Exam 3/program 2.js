//a function for calculating depreciation value. 
function depreciation(startvalue, endvalue, months) {
    //set parameters to a variable for calculations
    let s = startvalue;
    let e = endvalue;
    let m = months;

    //use above variables to calculate the monthly depretiation value.
    let d = (s - e) / m;
    //round the value of d 
    d = Math.round(d * 100) / 100;
    //return the value of d
    return d;

}