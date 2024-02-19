let totalSeet = 0;
function busSeet(elem) {
  const seetElemant = document.getElementById(elem).innerText;
  const convartNumber = parseInt(seetElemant);
  totalSeet = convartNumber;
  totalSeet--;
  const displayTotalSeet = document.getElementById(elem);
  displayTotalSeet.innerText = totalSeet;
}
let yourSett = 0;
function selectedYourSeet(elem) {
  const incrimantSeetElem = document.getElementById(elem).innerText;
  const convartNumber = parseInt(incrimantSeetElem);
  yourSett = convartNumber;
  yourSett++;
  const displaYourSeet = document.getElementById(elem);
  displaYourSeet.innerText = yourSett;
}

// button Background-Colo setup
function buttonBgColor(elem) {
  elem.classList.add("bg-green-600");
}

// display seet and price
function displaySeerAndPrice(elem) {
  const innerBTN = elem.innerText;
  const displayprice = document.getElementById("display-price");

  const divition = document.createElement("div");
  divition.classList.add("setDivitionStyle");
  displayprice.appendChild(divition);

  const elemOne = document.createElement("h1");
  elemOne.classList.add("elemOne");
  elemOne.innerText = innerBTN;
  divition.appendChild(elemOne);

  const elemTwo = document.createElement("h1");
  elemTwo.classList.add("elemOne");
  elemTwo.innerText = "Economoy";
  divition.appendChild(elemTwo);

  const elemThree = document.createElement("h1");
  elemThree.classList.add("elemOne");
  elemThree.innerText = "550";
  divition.appendChild(elemThree);
}

function CountPrice() {
  let priceCount = 0;
  const ticketPrice = document.getElementById("ticket-price").innerText;
  const convartToNumber = parseInt(ticketPrice);
  const price = 550;
  const busPrice = convartToNumber + price;
  priceCount += busPrice;
  const totalTickedPrice = document.getElementById("ticket-price");
  totalTickedPrice.innerText = priceCount;
  const totalTickedPriceTwo = document.getElementById("ticket-price2");
  totalTickedPriceTwo.innerText = priceCount;
}



const numberInputFild = document.getElementById("numberInputFild").value;
console.log(numberInputFild);
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", (e) => {
  Hidden("header");
  Hidden("main");
  Hidden("footer");
  ShowItem("secsec-bar");
});
document.getElementById("Continue-btn").addEventListener("click", () => {
  ShowItem("header");
  ShowItem("main");
  ShowItem("footer");
  Hidden('secsec-bar')
});

function Hidden(elemant) {
  const elem = document.getElementById(elemant);
  elem.classList.add("hidden");
}
function ShowItem(elem) {
  const elemnt = document.getElementById(elem);
  elemnt.classList.remove("hidden");
}
























