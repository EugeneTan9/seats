console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   return "WOW SOMETHING HAPPENED";
// };

var seatleft = 10;
var price = 50;


var inputHappened = function(currentInput){

    if (seatleft === 10 ){
        var seat = seatleft - 1;
        seatleft = seat;
        var finalprice = price;
        return "$" + finalprice + " , " + seatleft + " seats left";
    }else if (seatleft === 0 ){
        return "No more seats left";
    }
}else if (seatleft <= 9 && seatleft > 1 ) {
        var seat = seatleft - 1;
        var finalprice = (price * 0.05) + price;
        seatleft = seat;
        price = finalprice;
        return "$" + finalprice + " , " + seatleft + " seats left";
    }