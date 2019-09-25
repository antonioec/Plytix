import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DeleteModalComponent } from './modals/delete/delete-modal.component';
import { EditModalComponent } from './modals/edit/edit-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    DeleteModalComponent,
    EditModalComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
