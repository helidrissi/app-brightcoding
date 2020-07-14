import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormatComponent } from './contact-format.component';

describe('ContactFormatComponent', () => {
  let component: ContactFormatComponent;
  let fixture: ComponentFixture<ContactFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
