import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients";

@Injectable()
export class Recipe {
    constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[])
    {}
}

//export class Recipe {
//  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
//}

