function averageBig(list) {
    let sum = 0;
    let average = 0;
    let newArray = [];
    //test for numbers larger than 1000
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 1000) {
            //if the value is larger output into a new array
            newArray[i] = list[i];
            //add together all the values in the array
            sum += newArray[i]
            //divide the sum by the array length to find the average
            average = sum / (newArray.length / 2);
            //round the average
            average = Math.round(average * 100) / 100;

        }
    }
    //return average to call point
    return average;
}