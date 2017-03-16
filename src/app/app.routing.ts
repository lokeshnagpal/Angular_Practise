import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {SigninComponent} from './login/signin.component';
import {SignupComponent} from './login/signup.component';
import { ActivateGuard } from './login/canActivateGuard';

const APP_ROUTES: Routes = [  
    { path:'signin' ,component:SigninComponent} ,
    { path: 'signup', component: SignupComponent, canActivate: [ActivateGuard]},
    { path: 'recipes', loadChildren: 'src/app/recipes/recipe.module#RecipesModule'},
    { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
