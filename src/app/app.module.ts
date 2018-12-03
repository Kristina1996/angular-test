import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ReadUsersComponent } from './read-users/read-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsTableComponent } from './settings-table/settings-table.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalWindowComponent } from './modal-window.component';
//import { MaterialModule } from '@angular/material';
//import { MatDialogModule } from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		ReadUsersComponent,
		EditUserComponent,
		SettingsTableComponent,
		ModalWindowComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		InfiniteScrollModule,
		//MaterialModule,
		//MatDialogModule,
		FormsModule, ReactiveFormsModule, ModalModule.forRoot()
	],
	providers: [],
	entryComponents: [SettingsTableComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }
