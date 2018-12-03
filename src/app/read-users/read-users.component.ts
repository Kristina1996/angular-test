import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../user.service';
import { Observable} from 'rxjs';
import { User } from '../user';
import { Column } from '../column';
import { Http, Response, Headers } from '@angular/http';
import { ModalWindowComponent } from '../modal-window.component';
import { SettingsTableComponent } from '../settings-table/settings-table.component';
//import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-read-users',
	templateUrl: './read-users.component.html',
	styleUrls: ['./read-users.component.css'],
	providers: [UserService]
})
export class ReadUsersComponent implements OnInit {
	
	title = 'Список пользователей';
    users: User[];
	
	page: number = 1;
	
	modalRef: BsModalRef;
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService,
				 private modalService: BsModalService
				 //public dialog: MatDialog
				 ){}
				 
	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
	
	/*openMatModal() {
		this.dialog.open(SettingsTableComponent);
	}*/
 
    ngOnInit(){
        //this.getAllUsers();
		this.getUserswithPage();
    }
	
	getAllUsers() {
		this.userService.readUsers()
            .subscribe(users => {
				console.log(users); 
				this.users = users['records']}
            );
	}
	
	getUserswithPage() {
		this.userService.getUserswithPage(this.page)
			.subscribe(users => {
				console.log(users); 
				this.users = users['records']}
            );
	}
	
	onScroll() {
		console.log("Scrolled");
		this.page = this.page + 1;
		this.getUserswithPage();
	}

}
