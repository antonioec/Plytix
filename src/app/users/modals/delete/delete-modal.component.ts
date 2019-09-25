import { Component, Input, TemplateRef } from '@angular/core';
import { IUsers } from '../../models/users.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersApiService } from '../../services/members-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})

export class DeleteModalComponent {
  @Input() user: IUsers;
  public modalRef: BsModalRef;

  deleteForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private modalService: BsModalService, private usersApi: UsersApiService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onDelete(id: number) {
    this.usersApi.deleteUserById(id)
      .subscribe((data) => console.log(data));
  }

}
