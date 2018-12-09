import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
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
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService ){}
 
    ngOnInit() {
        //this.getAllUsers();
		this.getDataFromLocalStorage();
		this.getUserswithPage();
    }
	
	onChanged(increased: any) {
		console.log(increased);
		if (increased == false) {
			this.getDataFromLocalStorage();
			this.show = false;
		}
    }
	
	getDataFromLocalStorage() {
		let localStorageColumns = JSON.parse(localStorage.getItem('columns'));
		if (localStorageColumns == null) {
			console.log("localStorage пустой");
		} else { 
			console.log("localStorage не пустой"); 
			this.columns = localStorageColumns.columns;
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
				//this.users = users['records']
				if (this.page == 1) {
					this.users = users['records'];
				}
				
				if (this.page > 1) {
					for (var i=0; i < users['records'].length; i++) {
						var size = this.users.push(users['records'][i]);
						console.log(size);
					}
					console.log(users); 
				}
			});
	}
	
	onScroll() {
		console.log("Scrolled");
		this.page = this.page + 1;
		this.getUserswithPage();
	}

}
