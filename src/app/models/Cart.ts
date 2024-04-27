import { Cartitem } from "./Cartitem";

export class Cart {
    items : Cartitem[]= [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.getPrice();
        });

        return totalPrice;
    }
}