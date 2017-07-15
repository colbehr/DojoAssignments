import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponentComponent } from './quotes-component.component';

describe('QuotesComponentComponent', () => {
  let component: QuotesComponentComponent;
  let fixture: ComponentFixture<QuotesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
