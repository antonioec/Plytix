import { Component, OnInit, TemplateRef } from '@angular/core';
import { IUsers } from './models/users.model';
import { UsersApiService } from './services/members-api.service';
import { IPosts } from './models/posts.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUsers[];
  posts: IPosts[];
  public modalRef: BsModalRef;

  addForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private usersApi: UsersApiService, private modalService: BsModalService) { }

  ngOnInit() {
    this.loadUsers();

    this.loadPosts();
  }

  loadUsers() {
    this.usersApi.getAllUsers()
      .subscribe((us) => this.users = us);
  }

  loadPosts() {
    this.usersApi.getPostsByUserId()
      .subscribe((ps) => this.posts = ps);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onAdd() {
    this.usersApi.postNewUser(this.addForm.value);
  }

  loadPostById(id: number) {
      return this.posts.filter(post => post.userId === id).length;
  }
}
