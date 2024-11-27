import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionmanageComponent } from './permissionmanage.component';

describe('PermissionmanageComponent', () => {
  let component: PermissionmanageComponent;
  let fixture: ComponentFixture<PermissionmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionmanageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
