import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { COLUMNS } from '../columns-data';
import { Column } from '../column';

@Component({
	selector: 'app-settings-table',
	templateUrl: './settings-table.component.html',
	styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {

    columns = COLUMNS;
	column: Column;
    i: number;
	@Output() onChanged = new EventEmitter<boolean>();
	
	constructor (  ) {}

	ngOnInit() {
	}

    saveSettings() {
        this.setLocalStorageColumns();
		this.onChanged.emit(false);
	}
	
	closeModal() {
		this.onChanged.emit(false);
	}

    setLocalStorageColumns() {
		localStorage.setItem('columns', JSON.stringify({columns: this.columns}));
	}
	
	changeRange(index, nextIndex) {
		const tmp = this.columns[index];
		this.columns[index] = this.columns[nextIndex];
		this.columns[nextIndex] = tmp;
	}

    upColumn(column) {
		const index = this.columns.indexOf(column);
		if (index > 0) {
            const downIndex = index - 1;
            this.changeRange(index, downIndex);
        }
	}

	downColumn(column) {
		const index = this.columns.indexOf(column);
		if (index < this.columns.length - 1) {
            const upIndex = index + 1;
            this.changeRange(index, upIndex);
        }
	}

}
