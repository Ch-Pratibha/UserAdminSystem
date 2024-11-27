import { Component } from '@angular/core';

@Component({
  selector: 'app-usermanage',
  standalone: false,
  templateUrl: './usermanage.component.html',
  styleUrl: './usermanage.component.scss'
})
export class UsermanageComponent {
users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id:3, name:'Johnson', email: 'johnson@example.com', role: 'Admin', status:'Active'},
    { id:4, name:'Sam', email: 'sam@example.com', role: 'User', status:'Inactive'},
    { id:5, name:'Peter', email: 'peter@example.com', role: 'Admin', status:'Active'},
  ];

  newUser = { id: 0, name: '', email: '', role: '', status: 'Active' };
  editUser = { id: 0, name: '', email: '', role: '', status: 'Active' };


  addUser(): void {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.newUser.id = this.users.length + 1;
      this.users.push({ ...this.newUser });
      this.resetNewUser();
    } else {
      alert('Please fill all fields before adding a user.');
    }
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter((user) => user.id !== userId);
    this.users = this.users.map((user, index) => {
        user.id = index + 1; // Set the ID to the current index + 1
        return user;
      });
  }

  resetNewUser(): void {
    this.newUser = { id: 0, name: '', email: '', role: '', status: 'Active' };
  }

  loadUserForEdit(user: any): void {
    this.editUser = { ...user };
  }

  // Update user details
  updateUser(): void {
    const index = this.users.findIndex((user) => user.id === this.editUser.id);
    if (index !== -1) {
      this.users[index] = { ...this.editUser };
    }
  }
}
