import { AuthService } from "./auth.service";
import { RecipeService } from "./recipes/recipe.service";
import { Recipe } from "./recipes/recipe.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private rServ: RecipeService,
    private authS: AuthService
  ) {}

  saveRecipes() {
    const recipes = this.rServ.getRecipes();
    this.http
      .post(
        "https://anguka-53223-default-rtdb.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://anguka-53223-default-rtdb.firebaseio.com/recipes.json"
      )
      .pipe(
        map((recipes) => {
          console.log(recipes);
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          console.log(recipes);
          this.rServ.setRecipes(recipes);
        })
      );
  }
}
