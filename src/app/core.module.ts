import { NgModule } from "@angular/core";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({providers: [ShoppingListService, RecipeService]})

export class CoreModule{ }