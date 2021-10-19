import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'k-range-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class RangeSliderComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public min: number = 2010;

  @Input()
  public max: number = 2025;

  @Input()
  public step: number = 1;
  
  @Input()
  public after: number;

  @Input()
  public before: number;

  public selection: number[];

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['after'] || changes['before']) {
      let left = this.after ? this.after : this.min;
      let right = this.before ? this.before : this.max;
      this.selection = [left, right];
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public handle(event: { values: number[] }) {
    let values = [event.values[0], event.values[1]];
  }

  private track(options: number[]) {
    console.log(options);
  }
}