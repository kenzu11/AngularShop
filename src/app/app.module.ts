import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WearsComponent } from './wears/wears.component';
import { ListComponent } from './list/list.component';

import { WearService } from './wear.service';
import { WearPipe } from './wear.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WearsComponent,
    ListComponent,
    WearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpModule

  ],
  providers: [WearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
