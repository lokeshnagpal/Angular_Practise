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
const core_1 = require('@angular/core');
const router_1 = require("@angular/router");
const recipe_service_1 = require("../recipe.service");
let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(router, route, recipesService) {
        this.router = router;
        this.route = route;
        this.recipesService = recipesService;
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe((param) => {
            this.recipeIndex = param['id'],
                this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
        });
    }
    onEdit() {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
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
};
RecipeDetailComponent = __decorate([
    core_1.Component({
        selector: 'rb-recipe-detail',
        templateUrl: './src/app/recipes/recipe-detail/recipe-detail.component.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, recipe_service_1.RecipeService])
], RecipeDetailComponent);
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map