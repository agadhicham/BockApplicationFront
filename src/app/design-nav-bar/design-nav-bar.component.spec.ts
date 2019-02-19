import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNavBarComponent } from './design-nav-bar.component';

describe('DesignNavBarComponent', () => {
  let component: DesignNavBarComponent;
  let fixture: ComponentFixture<DesignNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
