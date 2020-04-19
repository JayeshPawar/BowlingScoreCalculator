import { Injectable } from '@angular/core';
import { Frame } from "src/app/shared/frame.model";

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculatorService {

  frame  : Frame;
  frames : Frame[];
  finalScore : number;

  constructor() {
    this.frames = [];
    this.finalScore = 0;
   }

  savaData(frame : Frame) : void{
      this.frames.push(frame);
   }
 
   refreshScore(){
    let totalScore= 0;
    for (let i = 0; i < this.frames.length; i++) {
      let roundScore = 0;
      if (i == 9)
      {
        roundScore = this.getScore(this.frames[i].FirstThrow) + this.getScore(this.frames[i].SecondThrow,this.frames[i].FirstThrow + this.getScore(this.frames[i].ThirdThrow,this.frames[i].SecondThrow));
      }
      else{
        roundScore = this.getScore(this.frames[i].FirstThrow) + this.getScore(this.frames[i].SecondThrow,this.frames[i].FirstThrow);
      }
      
      if((i+1) < this.frames.length)
      {
        if (this.frames[i].FirstThrow == 'X')
        {
            roundScore += this.getScore(this.frames[i+1].FirstThrow) + this.getScore(this.frames[i+1].SecondThrow,this.frames[i+1].FirstThrow);
        }
        if (this.frames[i].SecondThrow == '/')
        {
            roundScore += this.getScore(this.frames[i+1].FirstThrow)
        }
      }
      totalScore += roundScore;
    }
    this.finalScore = totalScore;
   }

   getScore(throwvalue : string, previousthrowValue? : string): number
   {
     if (throwvalue == 'X')
     {
      return 10;
     }
     if (throwvalue == '-')
     {
      return 0;
     }
     if (throwvalue == '/')
     {
      return 10 - (previousthrowValue == '-' ? 0 :Number(previousthrowValue));
     }
     return Number(throwvalue);
   }
}

