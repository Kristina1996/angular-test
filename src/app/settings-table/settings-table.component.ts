import { Component, OnInit, TemplateRef } from '@angular/core';
import { COLUMNS } from '../mock-columns';

@Component({
	selector: 'app-settings-table',
	templateUrl: './settings-table.component.html',
	styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
	
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    columns = COLUMNS;
	
	constructor (  ) {}

	ngOnInit() {
		
	}

}
