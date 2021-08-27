import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public items = [
    {name: 'total de proyectos', value: 11},
    {name: 'proyectos viabilizados', value: 5},
    {name: 'en proceso de viabilización', value: 4},
    {name: 'en ejecución', value: 2},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
