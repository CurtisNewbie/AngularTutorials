import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // get the object from the parent component
  @Input() product;

  // emitter that sends event to the parent, events are handled by parent component
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

} 