import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//material
import {PokerTableComponent} from './poker-table/poker-table.component';
import {PokerStatsComponent} from './poker-stats/poker-stats.component';
import {PokerCardComponent} from './poker-card/poker-card.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {DemoMaterialModule} from "./material-module";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        //material
        DemoMaterialModule,
        DragDropModule,
    ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent, PokerTableComponent, PokerStatsComponent, PokerCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
