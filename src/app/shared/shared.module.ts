import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSrpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [AlertComponent, LoadingSrpinnerComponent],
  imports: [CommonModule],
  exports: [AlertComponent, LoadingSrpinnerComponent, CommonModule]
})
export class SharedModule {}
