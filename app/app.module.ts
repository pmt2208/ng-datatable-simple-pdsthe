import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,
 MdCheckboxModule,
 MdTableModule,
 MdToolbarModule} from '@angular/material';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  MdButtonModule, MdCheckboxModule,MdToolbarModule,MdTableModule
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
