"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var TestComponent = (function () {
    function TestComponent() {
        var _this = this;
        this.show = false;
        setInterval(function () {
            console.log('tick');
            _this.show = !_this.show;
        }, 1000);
    }
    TestComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'test-component',
                    template: "\n\t  <div *ngIf=\"show\">hello child</div>\n\t",
                    directives: [common_1.NgIf]
                },] },
    ];
    TestComponent.ctorParameters = [];
    return TestComponent;
}());
exports.TestComponent = TestComponent;
