import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponentComponent } from './reg-component.component';

describe('RegComponentComponent', () => {
  let component: RegComponentComponent;
  let fixture: ComponentFixture<RegComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
