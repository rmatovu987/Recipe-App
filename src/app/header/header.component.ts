import { DataStorageService } from './../data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dt: DataStorageService){}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSave() {
    this.dt.saveRecipes();
  }

  onFetch() {
    this.dt.fetchRecipes().subscribe();
  }
}
