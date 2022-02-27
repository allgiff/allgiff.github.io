/*function tipCalc() {
    let billAmount = document.getElementById("cost-input").value;
    let serviceQual = document.getElementById("service").value;

    //validate input
    if (billAmount === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    //calculate tip 
    var total = (billAmount * serviceQual);
    //round
    total = Math.round(total * 100) / 100;
    //only have two decimal places
    total = total.toFixed(2);
    
    //show the user the tip
    let display = document.querySelector("#tip");
    display += innerHTML = total;
}; */

//Calculate Tip

function tipCalc() {
  var billAmt = document.getElementById("cost-input").value;
  var serviceQual = document.getElementById("service").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  //Calculate tip
  var total = (billAmt * serviceQual);
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("tip").innerHTML = total;

};