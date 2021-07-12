import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
