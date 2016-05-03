import {Component} from '@angular/core'
import {NgIf} from '@angular/common'


@Component({
	selector: 'test-component',
	template: `
	  <div *ngIf="show">hello child</div>
	`,
	directives: [NgIf]
})
export class TestComponent {
	show: boolean = false;
	constructor(){
		setInterval(() => {
			console.log('tick')
			this.show = !this.show;
		}, 1000)
	}
}
