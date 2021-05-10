import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TournamentsListComponent} from './tournaments-list/tournaments-list.component';
import {TournamentsComponent} from './tournaments.component';
import {TournamentsDetailComponent} from './tournaments-detail/tournaments-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TournamentsListComponent,
        data: {title: 'List', breadcrumb: 'List'}
      },
      {
        path: 'add',
        component: TournamentsDetailComponent,
        data: {title: 'Add', breadcrumb: 'Add'}
      },
      {
        path: 'list/:id',
        component: TournamentsDetailComponent,
        data: {title: 'Edit', breadcrumb: 'Edit'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
