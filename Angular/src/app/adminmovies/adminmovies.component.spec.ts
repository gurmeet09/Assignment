import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoviesComponent } from './adminmovies.component';

describe('AdminmoviesComponent', () => {
  let component: AdminmoviesComponent;
  let fixture: ComponentFixture<AdminmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
