import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWrapperComponent } from './angular-wrapper.component';

describe('AngularWrapperComponent', () => {
  let component: AngularWrapperComponent;
  let fixture: ComponentFixture<AngularWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
