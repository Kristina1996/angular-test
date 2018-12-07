import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
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
	@Input() show: boolean;
	@Output() onChanged = new EventEmitter<boolean>();
	
	constructor (  ) {}

	ngOnInit() {
        //this.setLocalStorageColumns(this.columns);
        //this.index = this.columns.findIndex(this.column => this.column.title == 'Имя';);
		
		console.log(this.index);
	}

    saveSettings() {
		console.log("заходит в сэйв");
		this.show = false;
		this.onChanged.emit(false);
		this.setLocalStorageColumns();
	}

    setLocalStorageColumns() {
		localStorage.setItem('columns', JSON.stringify({columns: this.columns}));
	}
	
	changeRange(index, nextIndex) {
		var tmp = this.columns[index];
		this.columns[index] = this.columns[nextIndex];
		this.columns[nextIndex] = tmp;
	}

    upColumn(column) {
		console.log(column);
		var index = this.columns.indexOf(column);
		var downIndex = index - 1;
		this.changeRange(index, downIndex);
		/* var tmp = this.columns[index];
		this.columns[index] = this.columns[downIndex];
		this.columns[downIndex] = tmp;
		console.log("index is : " + index ); */
	}

	downColumn(column) {
		var index = this.columns.indexOf(column);
		var upIndex = index + 1;
		this.changeRange(index, upIndex);
	}

}
