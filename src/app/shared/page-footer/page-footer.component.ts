import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-footer',
    templateUrl: './page-footer.component.html',
    styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit{

	public year;
	ngOnInit() {

		let date = new Date();
		this.year = date.getFullYear();
	}

}
