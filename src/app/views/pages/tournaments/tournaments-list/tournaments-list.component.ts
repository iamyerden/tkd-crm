import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  tournaments = [
    {id: 1, name: 'Tournament 1'},
    {id: 2, name: 'Tournament 2'},
    {id: 3, name: 'Tournament 3'},
    {id: 4, name: 'Tournament 4'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
