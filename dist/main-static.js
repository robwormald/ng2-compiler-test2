"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var app_ngfactory_1 = require('./app.ngfactory');
var appInjector = core_1.ReflectiveInjector.resolveAndCreate(browser_1.BROWSER_APP_PROVIDERS, browser_1.browserPlatform().injector);
core_1.coreBootstrap(appInjector, app_ngfactory_1.AppNgFactory);
