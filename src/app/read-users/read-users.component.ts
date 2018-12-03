import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Observable} from 'rxjs';
import { User } from '../user';
import { Http, Response, Headers } from '@angular/http';

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
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService ){}
 
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
