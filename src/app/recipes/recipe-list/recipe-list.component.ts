import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './src/app/recipes/recipe-list/recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[];

  constructor(private recipeService:RecipeService) {
      
  }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }

}



