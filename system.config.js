System.config({
    //use typescript for compilation
    map: {
        app: "./tmp",
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    },
    //packages defines our app package
    packages: {
        app: {
            main: './main-static.js',
            defaultExtension: 'js'
        },
        '@angular/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/common': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});

System.import('app')
