import { Injectable } from '@angular/core';
import { IUsers } from '../models/users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUsers[]> {
    const usersUrl = `http://34.244.243.6/users_aec`;
    return this.http.get<IUsers[]>(usersUrl);
  }

  getPostsByUserId(): Observable<IPosts[]> {
    const postsUrl = `http://34.244.243.6/posts_aec`;
    return this.http.get<IPosts[]>(postsUrl);
  }

  postNewUser(value): void {
    const usersUrl = `http://34.244.243.6/users_aec`;

    const postUser = {
      name: value.name,
      email: value.email,
      userPosts: 0
    };

     this.http.post(usersUrl, postUser).toPromise().then(data => {
       console.log(data);
     });
  }

  deleteUserById(id: number): Observable<IUsers> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id
      }
    };
    const userUrl = `http://34.244.243.6/users_aec/${id}`;
    return this.http.delete<IUsers>(userUrl, options);
  }

  patchUserById(id: number, values): Observable<IUsers> {
    const userUrl = `http://34.244.243.6/users_aec/${id}`;
    return this.http.patch<IUsers>(userUrl, {
      'name': values.name,
      'email': values.email
    });
  }
}
