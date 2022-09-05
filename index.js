calculate = () => {
  let cp = document.querySelector("input[name=initial-price]").value;
  let sp = document.querySelector("input[name=current-price]").value;
  let quantity = document.querySelector("input[name=quantity]").value;
  cp = cp * quantity;
  sp = sp * quantity;
  console.log(cp, sp);
  if (cp == "" || sp == "" || quantity == "") {
    document.getElementById("output-div").innerHTML =
      "Please fill all the fields";
    return;
  }
  if (sp > cp) {
    console.log("profit");
    window.profitPercent(cp, sp);
  } else if (cp > sp) {
    console.log("loss");
    window.lossPercent(cp, sp);
  } else {
    document.getElementById("output-div").innerHTML = "Neither gain nor loss";
  }
};
profitPercent = (cp, sp) => {
  let profit = sp - cp;
  let profitPrcnt = (profit / cp) * 100;
  profitPrcnt = profitPrcnt.toFixed(2);
  console.log(profitPrcnt);
  document.getElementById(
    "output-div"
  ).innerHTML = `Yayy!! you got a profit of ${profitPrcnt}%`;
};

lossPercent = (cp, sp) => {
  let loss = cp - sp;
  let lossPrcnt = (loss / cp) * 100;
  lossPrcnt = lossPrcnt.toFixed(2);
  console.log(lossPrcnt);
  document.getElementById(
    "output-div"
  ).innerHTML = `Ahh!! you got a loss of ${lossPrcnt}%`;
};
