import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() content = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked() {
    this.content.emit();
  }

}
