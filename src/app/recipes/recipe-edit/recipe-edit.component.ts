import { Recipe } from "./../recipe.model";
import { RecipeService } from "./../recipe.service";
import { Params, Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private rServ: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = "";
    let imgPath = "";
    let description = "";
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rServ.getRecipeById(this.id);
      recipeName = recipe.name;
      imgPath = recipe.imagePath;
      description = recipe.description;
      if (recipe["ingredients"]) {
        for (let ing of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imgPath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients,
    });
  }

  onSubmit() {
    // const recipe = new Recipe(
    //   this.form.value["name"],
    //   this.form.value["description"],
    //   this.form.value['imagePath'],
    //   this.form.value['ingredients']
    // );
    if (this.editMode) {
      this.rServ.updateRecipe(this.id, this.form.value);
    } else {
      this.rServ.addRecipe(this.form.value);
    }

    this.onCancel();
  }

  getControls() {
    return (<FormArray>this.form.get("ingredients")).controls;
  }

  addIngredient() {
    (<FormArray>this.form.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIng(index: number) {
    (<FormArray>this.form.get("ingredients")).removeAt(index);
  }
}
