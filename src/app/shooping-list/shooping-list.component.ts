import { ShoppingListService } from './../shared/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ing: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.ing.getIngredients();
    this.ing.ingredientsChanged.subscribe((ings: Ingredient[]) => {
      this.ingredients = ings;
    });
  }

}
