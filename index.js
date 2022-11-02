var initialStockPrice = document.querySelector("#initial-stock-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentStockPrice = document.querySelector("#current-stock-price");
var outputMessage = document.querySelector("#output-message");
var btnSubmit = document.querySelector("#btn-submit");


btnSubmit.addEventListener("click", caluclateProfitOrLoss);
function caluclateProfitOrLoss()
{
    var costPrice = Number(initialStockPrice.value);
    var numberOfStocks = Number(stockQuantity.value);
    var sellingPrice = Number(currentStockPrice.value);

    if(costPrice && numberOfStocks && sellingPrice){

        if(costPrice > sellingPrice)
        {
            var loss = (costPrice - sellingPrice) * numberOfStocks;    
            var lossPercentage = (((costPrice-sellingPrice) / costPrice) * 100);   
            outputMessage.innerText = "Woops! Your Loss is " +loss+" and the Loss Percentage is "+ lossPercentage +"%" ;
    
        }
        else if(sellingPrice > costPrice)
        {
            var profit = ((sellingPrice - costPrice) * numberOfStocks);
            var profitPercentage = ((sellingPrice - costPrice) / costPrice )*100;
            outputMessage.innerText = " Your Profit is " +profit+" and the profit Percentage is "+ profitPercentage +"%" ;
        }
        else {
            outputMessage.innerText= "No pain No Gain $ No Gain No Pain";
        }
    

    }
    else{
        outputMessage.innerText= "The Above Fields must not be Empty ";
    }
   }
