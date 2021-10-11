import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewTodoPage } from './view-todo.page';

import { IonicModule } from '@ionic/angular';

import { ViewTodoPageRoutingModule } from './view-todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTodoPageRoutingModule
  ],
  declarations: [ViewTodoPage]
})
export class ViewTodoPageModule {}
