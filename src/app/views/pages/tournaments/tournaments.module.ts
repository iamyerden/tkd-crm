import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsComponent } from './tournaments.component';
import { TournamentsDetailComponent } from './tournaments-detail/tournaments-detail.component';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TournamentsListComponent, TournamentsComponent, TournamentsDetailComponent],
    imports: [
        CommonModule,
        TournamentsRoutingModule,
        FlexModule,
        MatIconModule,
        MatButtonModule,
        PerfectScrollbarModule,
        MatToolbarModule,
        MatTableModule
    ]
})
export class TournamentsModule { }
