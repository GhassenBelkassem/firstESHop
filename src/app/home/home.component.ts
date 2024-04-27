import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private FoodService:FoodService , private route:ActivatedRoute, private cartService : CartService){ }

foods:Food[] =[];
  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      this.foods = this.FoodService.getAllFoodsBySearchTerm(params['searchTerm']);
    else if(params['tag']) 
    this.foods = this.FoodService.getAllFoodsByTag(params['tag']);
    else 
    this.foods = this.FoodService.getAll()
    })
    
  }
}
