import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpCurriculumComponent } from './cmp-curriculum/cmp-curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpCurriculumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
