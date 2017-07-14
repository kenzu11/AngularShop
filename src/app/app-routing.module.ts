import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { WearsComponent } from './wears/wears.component';

const routes: Routes = [
  {
    path: '',component: WearsComponent 
  },
  { 
    path: 'list/:id', component: ListComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
