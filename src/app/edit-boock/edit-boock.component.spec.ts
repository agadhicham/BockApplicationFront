import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoockComponent } from './edit-boock.component';

describe('EditBoockComponent', () => {
  let component: EditBoockComponent;
  let fixture: ComponentFixture<EditBoockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
