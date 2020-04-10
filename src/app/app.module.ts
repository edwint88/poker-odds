import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//material
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    //material
    MatDividerModule 
    ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
