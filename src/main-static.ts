import {coreBootstrap, ReflectiveInjector} from 'angular2/core';
import {browserPlatform, BROWSER_APP_PROVIDERS} from 'angular2/platform/browser';
import {AppNgFactory} from './app.ngfactory';
import {App} from './app';

const appInjector =
    ReflectiveInjector.resolveAndCreate(BROWSER_APP_PROVIDERS, browserPlatform().injector);
coreBootstrap(appInjector, AppNgFactory);
