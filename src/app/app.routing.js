"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./home.component');
const signin_component_1 = require('./login/signin.component');
const signup_component_1 = require('./login/signup.component');
const canActivateGuard_1 = require('./login/canActivateGuard');
const APP_ROUTES = [
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent, canActivate: [canActivateGuard_1.ActivateGuard] },
    { path: 'recipes', loadChildren: 'src/app/recipes/recipe.module#RecipesModule' },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map