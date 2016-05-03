"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_ngfactory_1 = require('./app.ngfactory');
var appInjector = core_1.ReflectiveInjector.resolveAndCreate(platform_browser_1.BROWSER_APP_STATIC_PROVIDERS, platform_browser_1.browserPlatform().injector);
core_1.coreBootstrap(appInjector, app_ngfactory_1.AppNgFactory);
