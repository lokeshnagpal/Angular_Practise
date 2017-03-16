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
const http_1 = require("@angular/http");
require('rxjs/Rx');
const recipe_1 = require("./recipe");
const ingredients_1 = require("../shared/ingredients");
let RecipeService = class RecipeService {
    constructor(http) {
        this.http = http;
        this.recipesChanged = new core_1.EventEmitter();
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitze1.jpg', [
                new ingredients_1.Ingredient('French Fries', 2),
                new ingredients_1.Ingredient('Pork Meat', 1)
            ]),
            new recipe_1.Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
        ];
    }
    getRecipes() {
        return this.recipes;
    }
    getRecipe(id) {
        return this.recipes[id];
    }
    deleteRecipe(recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
    editRecipe(oldRecipe, newRecipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }
    storeData() {
        const body = JSON.stringify(this.recipes);
        const headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://recipebook-8c242.firebaseio.com/recipes.json', body, { headers: headers });
    }
    fetchData() {
        return this.http.get('https://recipebook-8c242.firebaseio.com/recipes.json')
            .map((response) => response.json())
            .subscribe((data) => {
            this.recipes = data;
            this.recipesChanged.emit(this.recipes);
        });
    }
};
RecipeService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map