import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'summary-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-banner.component.html',
  styleUrls: ['./summary-banner.component.scss'],
})
export class SummaryBannerComponent {
  @Input() summaryjson: any;
  @Output() itemClickEvent = new EventEmitter<string>();

 
  onItemClick(event: Event, item: any, i: number) {
    this.itemClickEvent.emit(item);
  }

}
