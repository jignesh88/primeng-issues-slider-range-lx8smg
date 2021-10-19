import { Directive, AfterViewInit, OnInit, HostListener } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({ selector: 'p-slider', providers: [NgModel] })
export class RangeSliderDirective implements OnInit, AfterViewInit {
  
  private nodes: NodeList;
  
  constructor(private element: ElementRef, private renderer: Renderer2, private context: NgModel) {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.nodes = this.element.nativeElement.querySelectorAll('.ui-slider-handle');
    this.bind(this.nodes, this.context.model);
  }

  @HostListener('onChange', ['$event']) 
  public onChange(event: { values: number[] }) {
    this.bind(this.nodes, event.values);
  }

  private bind(nodes: NodeList, values: number[]) {
    let left = nodes && nodes.length > 0 ? nodes[0] : null;
    if (left) {
      let value = values[0] ? values[0].toString() : null;
      this.renderer.setAttribute(left, "data-left", value);
    }

    let right = nodes && nodes.length > 1 ? nodes[1] : null;
    if (right) {
      let value = values[1] ? values[1].toString() : null;
      this.renderer.setAttribute(right, "data-right", value);
    }
  }
}
