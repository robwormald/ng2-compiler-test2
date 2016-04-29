import {Component} from 'angular2/core'
import {TestComponent} from './test'

@Component({
	selector: 'test-app',
	template: `
	  <div>Hello {{name}}</div>
	  <test-component></test-component>
	`,
	directives: [TestComponent]
})
export class App {
	name: string;
	constructor(){
		this.name = 'hello'
	}
}
