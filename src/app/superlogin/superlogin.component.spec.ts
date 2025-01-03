import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperloginComponent } from './superlogin.component';

describe('SuperloginComponent', () => {
  let component: SuperloginComponent;
  let fixture: ComponentFixture<SuperloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
