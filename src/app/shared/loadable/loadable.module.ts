import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadableContentComponent} from './loadable-content/loadable-content.component';

@NgModule({
  declarations: [
    LoadableContentComponent
  ],
  exports: [
    LoadableContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadableModule {
}
