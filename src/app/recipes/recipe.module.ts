import { NgModule } from "@angular/core";
import { ReactiveFormsModule,FormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { recipesRouting } from "./recipe.routing";
import { RecipesComponent } from "./recipe.component";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeNew } from './recipe-new/recipe-new.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeNew
    ],
    imports: [recipesRouting,CommonModule,ReactiveFormsModule,FormsModule],
    providers: [RecipeService]
})
export class RecipesModule {}

