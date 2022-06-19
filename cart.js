var Shopingcart = /** @class */ (function () {
    function Shopingcart() {
        this.cart = [];
    }
    Shopingcart.prototype.addItem = function (prod) {
        this.cart.push(prod);
    };
    Shopingcart.prototype.removeItem = function (prod) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === prod) {
                this.cart.splice(i, 1);
            }
        }
    };
    Shopingcart.prototype.viewCart = function () {
        console.log(this.cart);
    };
    Shopingcart.prototype.clear = function () {
        this.cart = [];
    };
    return Shopingcart;
}());
var c1 = new Shopingcart();
c1.addItem("apple");
c1.addItem("banana");
c1.addItem("soap");
c1.addItem("oil");
c1.viewCart();
c1.removeItem("soap");
c1.clear();
c1.viewCart();
