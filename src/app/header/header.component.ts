import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(feature: string) {
    this.selected.emit(feature);
  }

}
