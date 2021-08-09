import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test",
      "This is a test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatballs-main-b401430.jpg?webp=true&quality=90&resize=440%2C400",
      [new Ingredient("Meat", 1), new Ingredient("Banana", 3)]
    ),
    new Recipe(
      "Recipe",
      "This is a test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatballs-main-b401430.jpg?webp=true&quality=90&resize=440%2C400",
      [new Ingredient("Spices", 11), new Ingredient("Flavor", 7)]
    ),
    new Recipe(
      "New Guy",
      "This is a test",
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/samosa.jpg",
      [new Ingredient("Greens", 3), new Ingredient("Banana", 5)]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
