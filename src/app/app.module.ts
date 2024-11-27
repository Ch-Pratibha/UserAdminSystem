import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { RolemanageComponent } from './rolemanage/rolemanage.component';
import { PermissionmanageComponent } from './permissionmanage/permissionmanage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermanageComponent,
    RolemanageComponent,
    PermissionmanageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
