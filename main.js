// selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

// button
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

// calculate
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        outputBox.style.color = "red";
        outputBox.innerText = "Uh oh! You lost " + lossPercentage.toFixed(2) + "% and your loss is ₹" + loss.toFixed(2) + " 😔";


    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        outputBox.style.color = "green";
        outputBox.innerText = "Congrats! You gained " + profitPercentage.toFixed(2) + "% and your profit is ₹" + profit.toFixed(2) + " 🤩🤑";

    } 
    else if(initial = current) {
    outputBox.style.color = "black";
    outputBox.innerText = "No profit, no loss, safe game 😉🤫";
}
else {
    outputBox.style.color = "black";
    outputBox.innerText = "Please fill all the boxes";
}
}