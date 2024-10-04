import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKeycloakComponent } from './user-keycloak.component';

describe('UserKeycloakComponent', () => {
  let component: UserKeycloakComponent;
  let fixture: ComponentFixture<UserKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserKeycloakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
