import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
    constructor(public name: string, public desc: string, public imageUrl: string, public ingredients: Ingredient[]) {
    }
}