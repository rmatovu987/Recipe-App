import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  @Output() addIngred = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addIngred.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }

}
