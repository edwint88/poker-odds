import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerStatsComponent } from './poker-stats.component';

describe('PokerStatsComponent', () => {
  let component: PokerStatsComponent;
  let fixture: ComponentFixture<PokerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
