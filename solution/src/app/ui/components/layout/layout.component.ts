import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Angular Social';
  public items = [{ label: 'Posts', url: '/posts'}];

  public developer = 'Bram Borggreve';
  public year = '2018';

  constructor() { }

  ngOnInit() {
  }

}
