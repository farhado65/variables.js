var money = 1;
var price = 2;
var chocolates = 0;

// while(money > price) {
//     money -= price;
//     chocolates++;
// }
do{
    money -= price;
    chocolates++;
    if(money < price){
        break;
    }
} while(true);

document.write("Am " + chocolates + "ciocolate");
document.write("<br>");
document.write("Am " + money + "lei");