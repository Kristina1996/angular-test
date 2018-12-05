import { Component, OnInit, TemplateRef } from '@angular/core';
import { COLUMNS } from '../columns-data';
import { Column } from '../column';

@Component({
	selector: 'app-settings-table',
	templateUrl: './settings-table.component.html',
	styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
	
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	hero = 'spider man';
    columns = COLUMNS;
    // columns: Column[];
	column: Column;
    index: number;
    i: number;
	
	constructor (  ) {}

	ngOnInit() {
        this.setLocalStorageColumns(this.columns);
        // this.index = this.columns.findIndex(this.column => this.column.title == 'Имя');
	}

    saveSettings() {
		console.log('working');
		this.setLocalStorageColumns(this.hero);
		console.log(this.columns);
	}

    setLocalStorageColumns(columns) {
		localStorage.setItem('columns', JSON.stringify({columns: this.columns}));
	}

    upColumn(title) {
		console.log(title);
	}

	downColumn(title) {

	}

}
