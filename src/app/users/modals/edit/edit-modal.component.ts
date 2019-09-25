import { Component, Input, TemplateRef } from '@angular/core';
import { IUsers } from '../../models/users.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersApiService } from '../../services/members-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})

export class EditModalComponent {
  @Input() user: IUsers;
  public modalRef: BsModalRef;

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private modalService: BsModalService, private usersApi: UsersApiService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onEdit(id: number) {
    this.usersApi.patchUserById(id, this.editForm.value)
      .subscribe((data) => console.log(data));
  }

}
