import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../models/Cart';
import { Cartitem } from '../models/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart !: Cart;
  constructor(private cartserice : CartService){
    this.setCart()
   }

    

      removeFromCart(Cartitem : Cartitem){
        this.cartserice.removeFromCart(Cartitem.food.id);
        this.setCart();
      }

      changeQuantity(cartitem : Cartitem, quantityinString : string){
        const quantity = parseInt(quantityinString);
        this.cartserice.changeQuantity(cartitem.food.id, quantity);
        this.setCart();

      }


      setCart(){
        this.cart = this.cartserice.getcart();
      }
}
