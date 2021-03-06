//import './polyfills.ts';
"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const core_1 = require('@angular/core');
const environment_1 = require('./environments/environment');
const app_module_1 = require('./app/app.module');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map