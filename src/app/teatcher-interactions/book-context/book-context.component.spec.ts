import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContextComponent } from './book-context.component';

describe('BookContextComponent', () => {
  let component: BookContextComponent;
  let fixture: ComponentFixture<BookContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
