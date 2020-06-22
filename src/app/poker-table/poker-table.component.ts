import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CardInfo} from "../base/card-info";

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

    tableCards: CardInfo[] = [
        // index 0 = left card
        // index 1 = right card
        // index 2 = flop 1 card
        // index 3 = flop 2 card
        // index 4 = flop 3 card
        // index 5 = turn card
        // index 6 = river card
    ];

    constructor() {
    }

    ngOnInit() {
    }

    drop(event: CdkDragDrop<CardInfo[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}
