import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users: any[] = [];
  name = '';
  email = '';

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  addUser() {
    this.http
      .post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
      })
      .subscribe(() => {
        this.fetchUsers();
        this.name = '';
        this.email = '';
      });
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((data) => {
      this.users = data;
    });
  }
}