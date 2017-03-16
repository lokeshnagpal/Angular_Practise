import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { RecipeService } from "../recipe.service"; 
import { Recipe } from "../recipe";


@Component({

  selector: 'rb-recipe-detail',
  templateUrl: './src/app/recipes/recipe-detail/recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService) {}

  ngOnInit() {
      this.subscription = this.route.params.subscribe (
         (param:any) => {
             this.recipeIndex = param['id'],
             this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex)
         }
      )
  }

  onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex,'edit']);
  }
//
//  onDelete() {
//    this.recipesService.deleteRecipe(this.selectedRecipe);
//    this.router.navigate(['/recipes']);
//  }
//
//  onAddToShoppingList() {
//    this.sls.addItems(this.selectedRecipe.ingredients);
//  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
