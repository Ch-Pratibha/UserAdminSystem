import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { RolemanageComponent } from './rolemanage/rolemanage.component';
import { PermissionmanageComponent } from './permissionmanage/permissionmanage.component';

const routes: Routes = [
  {path: 'users', component: UsermanageComponent },
  { path: 'roles', component: RolemanageComponent },
  { path: 'permissions', component: PermissionmanageComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
