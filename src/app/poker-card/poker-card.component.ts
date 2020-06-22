import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poker-card',
  templateUrl: './poker-card.component.html',
  styleUrls: ['./poker-card.component.scss']
})
export class PokerCardComponent implements OnInit {

  @Input()
  isCdkDrag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }ß

}
