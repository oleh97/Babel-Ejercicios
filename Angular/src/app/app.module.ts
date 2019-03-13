import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpEjercicioPipeComponent } from './cmp-ejercicio-pipe/cmp-ejercicio-pipe.component';
import { OcultoPipe } from './cmp-ejercicio-pipe/oculto.pipe';
import { CmpCurriculumComponent } from './cmp-curriculum/cmp-curriculum.component';
import { CmpEjercicioPipeComponent } from './cmp-ejercicio-pipe/cmp-ejercicio-pipe.component';
import { OcultoPipe } from './cmp-ejercicio-pipe/oculto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CmpEjercicioPipeComponent,
    OcultoPipe,
    AppComponent,
    CmpCurriculumComponent,
    AppComponent,
    CmpEjercicioPipeComponent,
    OcultoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
