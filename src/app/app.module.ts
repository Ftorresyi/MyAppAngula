import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivesComponent } from './components/diretives/diretives.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DiretivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
