import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule } from 'aws-amplify-angular';

const MODULES = [CommonModule, AmplifyAngularModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
