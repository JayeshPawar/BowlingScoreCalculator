import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ScoreCalculatorComponent } from './score-calculator/score-calculator.component';
import { ScoreInputComponent } from './score-calculator/score-input/score-input.component';
import { ScoreSheetComponent } from './score-calculator/score-sheet/score-sheet.component';
import { ScoreCalculatorService } from './shared/score-calculator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCalculatorComponent,
    ScoreInputComponent,
    ScoreSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ScoreCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
