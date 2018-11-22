import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Angular Social';
  public items = [
    { label: 'Posts', url: '/posts'},
    { label: 'Profiles', url: '/profiles'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
