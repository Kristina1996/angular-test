import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService }  from '../user.service';

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.css'],
	providers: [UserService]
})
export class EditUserComponent implements OnInit {
	
	update_user_form: FormGroup;
	title = 'Редактирование карточки пользователя';
	
	@Input() user: User;
	@Input() id;
	
	get buttonDisabled() {
		if (this.update_user_form.value.age > 18) {
			return true;
		}
	}
	
	newFunction() {
		if (this.update_user_form.value.check) {
			return true;
		} else { return false; }
	}

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private location: Location,
		private formBuilder: FormBuilder
	) {
		this.update_user_form = this.formBuilder.group({
            name: ["", Validators.required],
            surname: ["", Validators.required],
            age: ["", Validators.required],
            position: ["", Validators.required],
			check: [""],
			inn: ["", Validators.required]
        });
	}

	ngOnInit() {
		this.getUser();
		this.resetForm();
	}
	
	ngOnChanges() {
		//this.resetForm();
    }

	getUser(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.userService.getUser(id)
		.subscribe(user => this.user = user);
	}
	
	goBack(): void {
		this.location.back();
	}
	
	resetForm(): void {
		const id = +this.route.snapshot.paramMap.get('id');

        this.userService.getUser(id)
            .subscribe(user => {
                // Закладка данных в форму
                this.update_user_form.patchValue({
                    name: user.name,
                    surname: user.surname,
                    age: user.age,
					//address: user.address,
                    position: user.position,
					//salary: user.salary,
					inn: user.inn
                });
            });
	}
	
	save() {
		const id = +this.route.snapshot.paramMap.get('id');
		
		this.update_user_form.value.id = id;
        this.userService.updateUser(this.update_user_form.value)
            .subscribe(
                 user => {
                    this.goBack();
                 },
                 error => console.log(error)
             );
	}

}
