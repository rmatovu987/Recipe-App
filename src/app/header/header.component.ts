import {
  Component, OnDestroy,
  OnInit
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../auth.service";
import * as fromApp from "../store/app.reducer";
import { DataStorageService } from "./../data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  isAuthenticated = false;

  constructor(
    private dt: DataStorageService,
    private authS: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.sub = this.store
      .select("auth")
      .pipe(map((auth) => auth.user))
      .subscribe((user) => {
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
