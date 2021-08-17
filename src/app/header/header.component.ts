import { DataStorageService } from "./../data-storage.service";
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  isAuthenticated = false;

  constructor(private dt: DataStorageService, private authS: AuthService) {}

  ngOnInit() {
    this.sub = this.authS.user.subscribe(user => {
      // this.isAuthenticated = !!user;
      this.isAuthenticated = !user ? false : true;
    });
  }

  onSave() {
    this.dt.saveRecipes();
  }

  onFetch() {
    this.dt.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authS.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
