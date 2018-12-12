import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Http, Response, Headers } from '@angular/http';
import { COLUMNS } from '../columns-data';

@Component({
	selector: 'app-read-users',
	templateUrl: './read-users.component.html',
	styleUrls: ['./read-users.component.css'],
	providers: [UserService]
})
export class ReadUsersComponent implements OnInit {

    show = false;
	title = 'Список пользователей';
    users: User[] = [];
	columns = COLUMNS;
	page = 1;
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService ) {}
 
    ngOnInit() {
		this.getDataFromLocalStorage();
		this.getUserswithPage();
    }
	
	onChanged(increased: any) {
		console.log(increased);
		if (increased === false) {
			this.getDataFromLocalStorage();
			this.show = false;
		}
    }
	
	getDataFromLocalStorage() {
		const localStorageColumns = JSON.parse(localStorage.getItem('columns'));
		if (localStorageColumns == null) {
			console.log('localStorage пустой');
		} else {
			console.log('localStorage не пустой');
			this.columns = localStorageColumns.columns;
		}
	}
	
	getAllUsers() {
		this.userService.readUsers()
            .subscribe(users => {
				console.log(users);
				this.users = users['records'];
            });
	}
	
	getUserswithPage() {
		this.userService.getUserswithPage(this.page)
			.subscribe(users => {
				console.log(users);
				if (this.page === 1) {
					this.users = users['records'];
				}
				
				if (this.page > 1) {
					for (let i = 0; i < users['records'].length; i++) {
						const size = this.users.push(users['records'][i]);
						console.log(size);
					}
					console.log(users);
				}
			});
	}
	
	onScroll() {
		console.log('Scrolled');
		this.page = this.page + 1;
		this.getUserswithPage();
	}

}
