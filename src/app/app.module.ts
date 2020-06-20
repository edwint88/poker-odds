import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { PokerTableComponent } from './poker-table/poker-table.component';
import { PokerStatsComponent } from './poker-stats/poker-stats.component';
import { PokerCardComponent } from './poker-card/poker-card.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        //material
        MatDividerModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        DragDropModule
    ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent, PokerTableComponent, PokerStatsComponent, PokerCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
