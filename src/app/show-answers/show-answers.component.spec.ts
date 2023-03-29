import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnswersComponent } from './show-answers.component';

describe('ShowAnswersComponent', () => {
  let component: ShowAnswersComponent;
  let fixture: ComponentFixture<ShowAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
