import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ScoreCalculatorService } from 'src/app/shared/score-calculator.service';
import { Frame } from "src/app/shared/frame.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.less']
})
export class ScoreInputComponent implements OnInit {

  constructor(public service: ScoreCalculatorService, private toastr: ToastrService) { }
  
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.frame = {
      FirstThrow: null,
      SecondThrow: null,
      ThirdThrow: null
    }
  }


  onSubmit(form: NgForm) {
    if (this.validateInputs(form.value))
    {
      this.insertRecord(form);
      this.toastr.success('Saved !', 'Scores');
      this.resetForm();
    }
    else{
      this.toastr.error('Invalid Score !', 'Scores');
      this.resetForm();
    }
      
  }

  insertRecord(form: NgForm) {
      this.service.savaData(form.value);
      this.service.refreshScore();
  }

  allowedInput(evt) { 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if ((ASCIICode > 48 && ASCIICode < 58) || ASCIICode == 88 || ASCIICode == 45 || ASCIICode == 47)
        return true; 
    return false; 
  } 

  autoPopulateForStrike(inputValue: string) {
    if (inputValue == 'X')
    {
        this.service.frame.SecondThrow = "-";
    }
  }

  validateInputs(frame : Frame): boolean
  {
    let roundScore = this.service.getScore(frame.FirstThrow) + this.service.getScore(frame.SecondThrow,frame.FirstThrow);

    if (frame.FirstThrow == '/')
    {
      return false;
    }

    if (this.service.frames.length < 9)
    {
      if (frame.FirstThrow == 'X' && frame.SecondThrow != '-')
      {
        return false;
      }
  
      if (roundScore > 10)
      {
        return false;
      }

      if (roundScore == 10 && (frame.SecondThrow != '/'  && frame.SecondThrow != '-'))
      {
        return false;
      }
    }
    else
    {
        if (frame.ThirdThrow  != null)
        {
          if (frame.SecondThrow == '/' && frame.ThirdThrow == '/')
          {
            return false;
          }
          if (frame.SecondThrow != '/')
          {
            roundScore = this.service.getScore(frame.SecondThrow) + this.service.getScore(frame.ThirdThrow,frame.SecondThrow);
            if (roundScore > 10)
            {
              return false;
            }
          }
          
        }
    }
    
    return true;
  }
}
