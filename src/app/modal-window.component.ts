import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 
@Component({
	selector: 'modal-window',
	templateUrl: './modal-window.component.html'
})
export class ModalWindowComponent implements OnInit {
	modalRef: BsModalRef;
	constructor(private modalService: BsModalService) {}
 
	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
	
	ngOnInit() {
		
	}
}