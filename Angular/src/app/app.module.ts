import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpEjercicioPipeComponent } from './cmp-ejercicio-pipe/cmp-ejercicio-pipe.component';
import { OcultoPipe } from './cmp-ejercicio-pipe/oculto.pipe';
import { CmpCurriculumComponent } from './cmp-curriculum/cmp-curriculum.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpEjercicioPipeComponent,
    OcultoPipe,
    CmpCurriculumComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
