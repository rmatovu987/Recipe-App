import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatballs-main-b401430.jpg?webp=true&quality=90&resize=440%2C400'),
    new Recipe('Recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatballs-main-b401430.jpg?webp=true&quality=90&resize=440%2C400'),
    new Recipe('New Guy', 'This is a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/samosa.jpg'),
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recSelected.emit(recipe);
  }

}
