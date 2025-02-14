import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients :Ingredient[] = [
        new Ingredient("Apple" , 10),
        new Ingredient("Cake" , 5)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.ingredients.push(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}