import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'Chicken Tikka Pizza',
            'What else do you need? Order it fast!!',
            'https://freshstore.pk/Content/Products/ProductImages/13341/Chicken-Tikka-Pizza-(-Medium)1.jpg',
            [
                new Ingredient('Pizza Base',1),
                new Ingredient('Chicken',10),
                new Ingredient('Cheese',1),
            ]),
        new Recipe('Chicken Burger',
            'Best burger in the town!!',
            'https://www.kitchensanctuary.com/wp-content/uploads/2016/10/Cheese-stuffed-burger-square.jpg',
            [
                new Ingredient('Bread',1),
                new Ingredient('Cheese slice',2),
                new Ingredient('Meat',1),
            ])
      ];

      constructor(private shoppingListService : ShoppingListService) { }
      
      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}