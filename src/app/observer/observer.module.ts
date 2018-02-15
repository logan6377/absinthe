import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ObserverComponent],
  exports:[ObserverComponent]
})
export class ObserverModule { }
