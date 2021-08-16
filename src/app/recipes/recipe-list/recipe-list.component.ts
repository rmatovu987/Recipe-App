import { Subscription } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private sub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sub = this.recipeService.recipesChanges.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  onNew() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
