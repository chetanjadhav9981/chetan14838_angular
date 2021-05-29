import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamretroComponent } from './teamretro.component';

describe('TeamretroComponent', () => {
  let component: TeamretroComponent;
  let fixture: ComponentFixture<TeamretroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamretroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamretroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
