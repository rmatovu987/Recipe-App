import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mangoes', 4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}
