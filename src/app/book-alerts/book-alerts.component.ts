import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-alerts',
  templateUrl: './book-alerts.component.html',
  styleUrls: ['./book-alerts.component.css']
})
export class BookAlertsComponent implements OnInit {
  @Input() book;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}