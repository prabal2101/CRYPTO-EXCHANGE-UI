var btc = document.getElementById("btc-price");
var eth = document.getElementById("eth-price");
var doge = document.getElementById("doge-price");

var btcChange = document.getElementById("btc-change");
var ethChange = document.getElementById("eth-change");
var dogeChange = document.getElementById("doge-change");

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&include_24hr_change=true";

function fetchPrices() {
  $.get(url, function (response) {

    btc.innerText = `$${response.bitcoin.usd}`;
    eth.innerText = `$${response.ethereum.usd}`;
    doge.innerText = `$${response.dogecoin.usd}`;
 updateChange(btcChange, response.bitcoin.usd_24h_change);
    updateChange(ethChange, response.ethereum.usd_24h_change);
    updateChange(dogeChange, response.dogecoin.usd_24h_change);

console.log("Prices updated:", response);
  }).fail(function (err) {
    console.error("Error fetching prices:", err);
  });
}

function updateChange(element, change) {
  let rounded = change.toFixed(2);
  if (rounded >= 0) {
    element.style.color = "limegreen";
    element.innerText = `▲ ${rounded}%`;
  } else {
    element.style.color = "red";
    element.innerText = `▼ ${Math.abs(rounded)}%`;
  }
}


function toggleMenu() {
document.querySelector("nav ul").classList.toggle("active");
}


fetchPrices();

setInterval(fetchPrices, 60000);
