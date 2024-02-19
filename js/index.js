// this is the return smothli ticked container
const buyBtn = document.getElementById("buy-btn");
buyBtn.addEventListener("click", () => {
  const bayTicked = document.getElementById("bay-ticked");
  bayTicked.scrollIntoView({ behavior: "smooth" });
});

// this is the ticked caunter
const setButton = document.querySelectorAll("#btn");
let set = 0;
let seetCount = 0;
for (const btn of setButton) {
  btn.addEventListener("click", () => {
    seetCount++;
    if (seetCount > 4) {
      alert("Complet Youer Seet");
      return;
    }

    console.log(seetCount);
    buttonBgColor(btn);
    busSeet("totla-seet");
    selectedYourSeet("selected-set");
    displaySeerAndPrice(btn);
    CountPrice();
    fourCountButton();
  });
}

// this is copon apply button
const Apply = document.getElementById("Apply");
Apply.addEventListener("click", () => {
  const inputFild = document.getElementById("copon-fild").value;
  const coponCode = inputFild.split(" ").join("").toUpperCase();
  if (coponCode === "NEW15") {
    const offerPrice = document.getElementById("ticket-price2").innerText;
    const convartNumber = parseInt(offerPrice);
    const offer = (convartNumber * 15) / 100;
    const lastPrice = convartNumber - offer;
    const allPrice = lastPrice.toFixed(2);
    const totalPriceDisplay = document.getElementById("ticket-price2");
    totalPriceDisplay.innerText = allPrice;
    const hiddenInputFild = document.getElementById("in-and-btn-fild");
    hiddenInputFild.classList.add("hidden");
  }else if(coponCode === 'COUPLE20'){
    const copelPrice = document.getElementById("ticket-price2").innerText;
    const convartNumber = parseInt(copelPrice);
    const offer = (convartNumber * 20) / 100;
    const lastPrice = convartNumber - offer;
    const allPrice = lastPrice.toFixed(2);
    const totalPriceDisplay = document.getElementById("ticket-price2");
    totalPriceDisplay.innerText = allPrice;
    const hiddenInputFild = document.getElementById("in-and-btn-fild");
    hiddenInputFild.classList.add("hidden");
  }else{
    alert('Invalid Copon Code')
  }

});
