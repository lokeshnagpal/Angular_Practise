import {RouterModule,Routes} from '@angular/router';
import {RecipesComponent} from './recipe.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import {RecipeNew} from '../recipes/recipe-new/recipe-new.component';

const RECIPES_ROUTES:Routes=[
    {path:'', component:RecipesComponent},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit', component:RecipeEditComponent},
    {path: 'new', component:RecipeNew}
]

export const recipesRouting = RouterModule.forChild(RECIPES_ROUTES);