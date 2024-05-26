import { SportProduct, SPORT } from "./product";
import { Cart } from "./cart";
import { sizeFormatter,costFormatter, writeMsg } from "./formatter";

let kayak = new SportProduct(1,'kayak',275,SPORT.Watersports)
let hat = new SportProduct(2,'Hat',27.05,SPORT.Watersports)
let ball = new SportProduct(3,'Ball',19.50,SPORT.Soccer)


let cart = new Cart("kadima")

cart.addProduct(kayak, 1)
cart.addProduct(hat,1)
cart.addProduct(hat,2)

sizeFormatter("Cart", cart.itemCount)
costFormatter("Cart", cart.totalPrice)

writeMsg('Test message')



