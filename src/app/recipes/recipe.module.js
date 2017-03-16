"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const recipe_routing_1 = require("./recipe.routing");
const recipe_component_1 = require("./recipe.component");
const recipe_list_component_1 = require('./recipe-list/recipe-list.component');
const recipe_item_component_1 = require('./recipe-list/recipe-item.component');
const recipe_service_1 = require('./recipe.service');
const recipe_detail_component_1 = require('./recipe-detail/recipe-detail.component');
const recipe_edit_component_1 = require('./recipe-edit/recipe-edit.component');
const recipe_new_component_1 = require('./recipe-new/recipe-new.component');
let RecipesModule = class RecipesModule {
};
RecipesModule = __decorate([
    core_1.NgModule({
        declarations: [
            recipe_component_1.RecipesComponent,
            recipe_list_component_1.RecipeListComponent,
            recipe_item_component_1.RecipeItemComponent,
            recipe_detail_component_1.RecipeDetailComponent,
            recipe_edit_component_1.RecipeEditComponent,
            recipe_new_component_1.RecipeNew
        ],
        imports: [recipe_routing_1.recipesRouting, common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
        providers: [recipe_service_1.RecipeService]
    }), 
    __metadata('design:paramtypes', [])
], RecipesModule);
exports.RecipesModule = RecipesModule;
//# sourceMappingURL=recipe.module.js.map