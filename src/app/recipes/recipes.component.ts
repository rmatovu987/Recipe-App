import { RecipeService } from './../shared/recipe.service';
import { Recipe } from './recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selected: Recipe;

  constructor(private rec: RecipeService) { }

  ngOnInit(): void {
    this.rec.recipeSelected.subscribe((recipe: Recipe) => {
      this.selected = recipe;
    });
  }

}
