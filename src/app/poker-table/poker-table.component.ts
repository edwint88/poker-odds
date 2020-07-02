import {Component, OnInit} from '@angular/core';
import {CardInfo} from "../base/card-info";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-poker-table',
    templateUrl: './poker-table.component.html',
    styleUrls: ['./poker-table.component.scss']
})
export class PokerTableComponent implements OnInit {

    cards: CardInfo[] = [
        {
            symbol: "♣",
            rank: 'rank-a',
            color: 'clubs',
            value: 'A'
        },
        {
            symbol: "♠",
            rank: 'rank-a',
            color: 'spades',
            value: 'A'
        },
        {
            symbol: "♦",
            rank: 'rank-a',
            color: 'diams',
            value: 'A'
        },
        {
            symbol: "♥",
            rank: 'rank-a',
            color: 'hearts',
            value: 'A'
        }
    ];

    flopClass = new BehaviorSubject<string>(null);
    lastClass = new BehaviorSubject<string>(null);

    constructor() {
    }

    ngOnInit() {
        this.checkCssClasses();
    }

    checkCssClasses() {
        if (this.isMobile()) {
            this.flopClass.next('');
            this.lastClass.next('');
        } else {
            this.flopClass.next('col-7');
            this.lastClass.next('col-5');
        }
    }

    public isMobile(): boolean {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth, document.body.clientWidth || 0);
        return width < 768;
    }
}
