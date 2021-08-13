var coinData;

var api = 'https://api.coingecko.com/api/v3/coins/';


function setup() {
  createCanvas(1,1);

  var button = select("#submit");
  button.mousePressed(search);

}

function search() {
  var coin = select("#coins").value();

  loadJSON(api + coin, gotData);
}


function gotData(data){
  
  var currency = select("#money").value();

  coinData = data
  let name = coinData.name
  
  if (currency == "usd")  {

    let price = "1 " + name + " = $ " + coinData.market_data.current_price.usd;
    let img = coinData.image.large;
    let high_24h = coinData.market_data.high_24h.usd;
    let low_24h = coinData.market_data.low_24h.usd;
    let price_change_24h = coinData.market_data.price_change_24h;
    let price_change_percentage_24h = coinData.market_data.price_change_percentage_24h
    let desc = coinData.description.en;
    
    document.getElementById("resultPrice").innerHTML = "<br>" + price + "<br>"; 
    document.getElementById("img").innerHTML = "<img src=\"" +  img + "\">";
    document.getElementById("high_24h").innerHTML = "24h High = $ " + high_24h;
    document.getElementById("low_24h").innerHTML = "24h Low = $ " + low_24h;
    document.getElementById("price_change_24h").innerHTML = "Price Change 24h = $ " + price_change_24h;
    document.getElementById("price_change_percentage_24h").innerHTML = "Price Change = " + price_change_percentage_24h + " %";
    document.getElementById("desc").innerHTML = "<p id=\"desc\">" + desc + "</p>";

  }

  else if(currency == "try")  {
    let price = "1 " + name + " = " + coinData.market_data.current_price.try + " ₺";
    let img = coinData.image.large;
    let high_24h = coinData.market_data.high_24h.try;
    let low_24h = coinData.market_data.low_24h.try;
    let price_change_24h = coinData.market_data.price_change_24h;
    let price_change_percentage_24h = coinData.market_data.price_change_percentage_24h
    let desc = coinData.description.en;

    document.getElementById("resultPrice").innerHTML = "<br>" + price + "<br>"; 
    document.getElementById("img").innerHTML = "<img src=\"" +  img + "\">";
    document.getElementById("high_24h").innerHTML = "24h High = " + high_24h + " ₺";
    document.getElementById("low_24h").innerHTML = "24h Low = " + low_24h + " ₺";
    document.getElementById("price_change_24h").innerHTML = "Price Change 24h = " + price_change_24h + " ₺";
    document.getElementById("price_change_percentage_24h").innerHTML = "Price Change = " + price_change_percentage_24h + " %";
    document.getElementById("desc").innerHTML = "<p id=\"desc\">" + desc + "</p>";

  }

  else{
    document.getElementById("resultPrice").innerHTML = "<br>Please Select Coin and Currency!<br>";
    document.getElementById("img").innerHTML = "";
    document.getElementById("high_24h").innerHTML = "";
    document.getElementById("low_24h").innerHTML = "";
    document.getElementById("price_change_24h").innerHTML = "";
    document.getElementById("price_change_percentage_24h").innerHTML = "";
    document.getElementById("desc").innerHTML = "";
  }

}