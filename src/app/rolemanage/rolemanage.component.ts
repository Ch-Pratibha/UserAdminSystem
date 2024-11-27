import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolemanage',
  standalone: false,

  templateUrl: './rolemanage.component.html',
  styleUrl: './rolemanage.component.scss'
})
export class RolemanageComponent  implements OnInit{
  ngOnInit():void{}
users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
  ];

  roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Viewer', permissions: ['Read'] },
  ];

  newRole = { id: 0, name: '', permissions: [] };  // For Add Role
  editRole = { id: 0, name: '', permissions: [] };  // For Edit Role

  // Add a new role
  addRole(): void {
    if (this.newRole.name && this.newRole.permissions.length > 0) {
      this.newRole.id = this.roles.length + 1;
      this.roles.push({ ...this.newRole });
      this.resetNewRole();
    } else {
      alert('Please fill all fields before adding a role.');
    }
  }

  // Update an existing role
  updateRole(): void {
    const index = this.roles.findIndex((role) => role.id === this.editRole.id);
    if (index !== -1) {
      this.roles[index] = { ...this.editRole };
    }
  }

  // Load role data into the edit form
  loadRoleForEdit(role: any): void {
    this.editRole = { ...role }; // Copy the selected role data
  }

  // Reset new role form
  resetNewRole(): void {
    this.newRole = { id: 0, name: '', permissions: [] };
  }
}
