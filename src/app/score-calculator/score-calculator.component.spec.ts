import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCalculatorComponent } from './score-calculator.component';

describe('ScoreCalculatorComponent', () => {
  let component: ScoreCalculatorComponent;
  let fixture: ComponentFixture<ScoreCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
