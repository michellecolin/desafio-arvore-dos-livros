import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveQuestionsComponent } from './interactive-questions.component';

describe('InteractiveQuestionsComponent', () => {
  let component: InteractiveQuestionsComponent;
  let fixture: ComponentFixture<InteractiveQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
