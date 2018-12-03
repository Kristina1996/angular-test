import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-settings-table',
	templateUrl: './settings-table.component.html',
	styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
	
	//"./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
	
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

	modalRef: BsModalRef;
	
	constructor(private modalService: BsModalService,
				//private matDialogRef: MatDialogRef<SettingsTableComponent>
				) {}
 
	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	ngOnInit() {
		
	}

}
