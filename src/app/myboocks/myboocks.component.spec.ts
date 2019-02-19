import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyboocksComponent } from './myboocks.component';

describe('MyboocksComponent', () => {
  let component: MyboocksComponent;
  let fixture: ComponentFixture<MyboocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyboocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyboocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
