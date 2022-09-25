let initialPrice = document.querySelector("#initial-price");
let currentPrice = document.querySelector("#current-price");
let stocks = document.querySelector("#quantity");
let calculateBtn = document.querySelector(".btn-calculate");
let outputDiv = document.querySelector("#output-div");
let calculate = () => {
  let cp = initialPrice.value;
  let sp = currentPrice.value;
  let quantity = stocks.value;
  console.log(cp, sp, quantity);
  let totalCp = Number(cp) * Number(quantity);
  let totalSp = Number(sp) * Number(quantity);
  console.log(totalCp);
  console.log(cp, sp, quantity);
  if (cp == "" || sp == "" || quantity == "") {
    outputDiv.style.color = "";
    outputDiv.innerHTML = "Please fill all the fields 🤨";
  } else if (Number(quantity) < 0) {
    outputDiv.style.color = "";
    outputDiv.innerHTML = "Number of stocks cannot be negative";
  } else if (totalSp > totalCp) {
    console.log("profit");
    profitPercent(totalCp, totalSp);
  } else if (totalCp > totalSp) {
    console.log("loss");
    lossPercent(totalCp, totalSp);
  } else {
    outputDiv.style.color = "";
    outputDiv.innerHTML = "Neither gain nor loss 🙃";
  }
};
let profitPercent = (cp, sp) => {
  let profit = sp - cp;
  let profitPrcnt = (profit / cp) * 100;
  profitPrcnt = profitPrcnt.toFixed(2);
  console.log(profitPrcnt);
  outputDiv.style.color = "green";

  outputDiv.innerHTML = `Yayy!! you got a profit of ${profit} and the percentage is ${profitPrcnt}% 🤑`;
};

let lossPercent = (cp, sp) => {
  let loss = cp - sp;
  let lossPrcnt = (loss / cp) * 100;
  lossPrcnt = lossPrcnt.toFixed(2);
  console.log(lossPrcnt);
  outputDiv.style.color = "red";
  outputDiv.innerHTML = `Ahh !!  you got a loss of ${loss} and the percentage is ${lossPrcnt}% 😓`;
};

calculateBtn.addEventListener("click", calculate);
