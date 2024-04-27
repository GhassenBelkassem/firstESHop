import { Component } from '@angular/core';
import { Food } from '../models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;
  constructor(private activatedroute: ActivatedRoute, private foodService: FoodService, private router:Router, private cartService : CartService) { 
    activatedroute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(params['id']);
      }
    }); 

  }
  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  }



