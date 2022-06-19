
class Shopingcart{
    cart:string[]=[];
    prod:string;
 
     addItem(prod:string){
         this.cart.push(prod)
     }
     removeItem(prod:string){
        for(var i=0;i<this.cart.length;i++){
         if (this.cart[i]===prod){
             this.cart.splice(i,1);
         }
        }
         }
     
     viewCart(){
         console.log(this.cart) 
     }
     clear() {
         this.cart = [];
       }
 }
 var c1 = new Shopingcart()
 c1.addItem("apple")
 c1.addItem("banana")
 c1.addItem("soap")
 c1.addItem("oil")
 c1.viewCart()
 c1.removeItem("soap")
 c1.clear()
 c1.viewCart()