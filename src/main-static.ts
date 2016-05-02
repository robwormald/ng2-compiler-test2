import {coreBootstrap, ReflectiveInjector} from '@angular/core';
import {browserPlatform, BROWSER_APP_STATIC_PROVIDERS} from '@angular/platform-browser';
import {AppNgFactory} from './app.ngfactory';
import {App} from './app';

const appInjector =
    ReflectiveInjector.resolveAndCreate(BROWSER_APP_STATIC_PROVIDERS, browserPlatform().injector);
coreBootstrap(appInjector, AppNgFactory);
