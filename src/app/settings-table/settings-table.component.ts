import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-settings-table',
	templateUrl: './settings-table.component.html',
	styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
	
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

	constructor() { }

	ngOnInit() {
		
	}

}
