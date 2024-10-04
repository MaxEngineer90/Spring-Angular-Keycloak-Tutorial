import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBackendComponent } from './user-backend.component';

describe('UserBackendComponent', () => {
  let component: UserBackendComponent;
  let fixture: ComponentFixture<UserBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBackendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
