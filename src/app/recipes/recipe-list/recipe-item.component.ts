import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './src/app/recipes/recipe-list/recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit  {
  
  @Input() recipes: Recipe[];
  rec:Recipe[];
  @Input() recipeId: number;
  
  constructor(){
      
  }
  ngOnInit(){
      this.rec = this.recipes;
  }
  
//  trackByIndex(index:number , value: number){
//      this.rec = this.recipes[index];
//  }
}



