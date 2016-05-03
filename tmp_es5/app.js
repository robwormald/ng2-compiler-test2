"use strict";
var core_1 = require('@angular/core');
var test_1 = require('./test');
var App = (function () {
    function App() {
        this.name = 'hello';
    }
    App.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'test-app',
                    template: "\n\t  <div>Hello {{name}}</div>\n\t  <test-component></test-component>\n\t",
                    directives: [test_1.TestComponent]
                },] },
    ];
    App.ctorParameters = [];
    return App;
}());
exports.App = App;
