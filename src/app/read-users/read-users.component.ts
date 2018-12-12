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
 
    /**
	 * Инициализация userService для получения списка пользователей
	 */
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

    /**
	 * Получение списка колонок из localStorage
     */
	getDataFromLocalStorage() {
		const localStorageColumns = JSON.parse(localStorage.getItem('columns'));
		if (localStorageColumns == null) {
			console.log('localStorage пустой');
		} else {
			console.log('localStorage не пустой');
			this.columns = localStorageColumns.columns;
		}
	}

    /**
	 * Получение списка всех пользователей через userService
     */
	getAllUsers() {
		this.userService.readUsers()
            .subscribe(users => {
				console.log(users);
				this.users = users['records'];
            });
	}

    /**
	 * Получение списка пользователей с учетом динамической подгрузки
     */
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

    /**
	 * Метод для получения списка новых данных с бэка, срабатывающий при скролле компонента
     */
	onScroll() {
		console.log('Scrolled');
		this.page = this.page + 1;
		this.getUserswithPage();
	}

}
