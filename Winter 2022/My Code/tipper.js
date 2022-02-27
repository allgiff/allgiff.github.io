function tipCalc() {
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
    display.innerHTML = total;
};