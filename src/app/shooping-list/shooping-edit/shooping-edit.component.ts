import { ShoppingListService } from './../../shared/shopping-list.service';
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

  constructor(private ing: ShoppingListService) { }

  ngOnInit(): void {
  }

  add() {
    this.ing.addIngredient(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
}
