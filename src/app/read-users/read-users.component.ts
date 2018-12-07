import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../user.service';
import { Observable} from 'rxjs';
import { User } from '../user';
import { Column } from '../column';
import { Http, Response, Headers } from '@angular/http';
import { ModalWindowComponent } from '../modal-window.component';
import { SettingsTableComponent } from '../settings-table/settings-table.component';
import { COLUMNS } from '../columns-data';

@Component({
	selector: 'app-read-users',
	templateUrl: './read-users.component.html',
	styleUrls: ['./read-users.component.css'],
	providers: [UserService]
})
export class ReadUsersComponent implements OnInit {

    show: boolean = false;
	title = 'Список пользователей';
    users: User[] = [];
	
	//columns: Column[];
	columns = COLUMNS;
	
	page: number = 1;
	
	//modalRef: BsModalRef;
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService,
				 //private modalService: BsModalService
				 //public dialog: MatDialog
				 ){}
 
    ngOnInit() {
        //this.getAllUsers();
		let localStorageColumns = JSON.parse(localStorage.getItem('columns'));
		if (localStorageColumns == null) {
			console.log("localStorage пустой");
		} else { 
			console.log("localStorage не пустой"); 
			//this.columns = localStorageColumns.columns;
		}
		this.getUserswithPage();
    }
	
	onChanged(increased: any) {
		console.log(increased);
		if (increased == false) {
			this.show = false;
		}
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
				this.users = users['records']
                //this.users = this.users.concat(users['records']);
				//this.users.push(users['records']);
				console.log(users);
			});
	}
	
	onScroll() {
		console.log("Scrolled");
		this.page = this.page + 1;
		this.getUserswithPage();
	}

}
