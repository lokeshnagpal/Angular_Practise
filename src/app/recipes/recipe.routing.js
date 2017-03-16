"use strict";
const router_1 = require('@angular/router');
const recipe_component_1 = require('./recipe.component');
const recipe_detail_component_1 = require('../recipes/recipe-detail/recipe-detail.component');
const recipe_edit_component_1 = require('../recipes/recipe-edit/recipe-edit.component');
const recipe_new_component_1 = require('../recipes/recipe-new/recipe-new.component');
const RECIPES_ROUTES = [
    { path: '', component: recipe_component_1.RecipesComponent },
    { path: ':id', component: recipe_detail_component_1.RecipeDetailComponent },
    { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent },
    { path: 'new', component: recipe_new_component_1.RecipeNew }
];
exports.recipesRouting = router_1.RouterModule.forChild(RECIPES_ROUTES);
//# sourceMappingURL=recipe.routing.js.map