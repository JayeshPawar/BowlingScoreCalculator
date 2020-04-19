import { Component, OnInit } from '@angular/core';
import { ScoreCalculatorService } from 'src/app/shared/score-calculator.service';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.less']
})
export class ScoreSheetComponent implements OnInit {

  constructor(public service: ScoreCalculatorService) { }

  ngOnInit(): void {
    this.service.refreshScore();
  }

}
