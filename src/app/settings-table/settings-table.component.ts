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
        this.setLocalStorageColumns();
		console.log("заходит в сэйв");
		this.show = false;
		this.onChanged.emit(false);
	}
	
	closeModal() {
		this.onChanged.emit(false);
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
		var index = this.columns.indexOf(column);
		if (index > 0) {
            var downIndex = index - 1;
            this.changeRange(index, downIndex);
        }
	}

	downColumn(column) {
		var index = this.columns.indexOf(column);
		if (index < this.columns.length - 1) {
            var upIndex = index + 1;
            this.changeRange(index, upIndex);
        }
	}

}
