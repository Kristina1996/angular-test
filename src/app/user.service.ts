import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private _http: Http) { }
	
    readUsers(): Observable<User[]> {
        return this._http
			.get("http://api/dao/read.php")
            .pipe(map((res: Response) => res.json()));
    }
	
	getUserswithPage(page: number): Observable<User[]> {
		return this._http.get("http://api/dao/getUserswithPage.php?page="+page)
						 .pipe(map((res: Response) => res.json()));
	}
	
	getUser(id): Observable<User> {
		return this._http.get("http://api/dao/read_one.php?id="+id)
			.pipe(map((res: Response) => res.json()));
	}
	
	updateUser(user): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.put(
			"http://api/dao/update.php",
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
}
