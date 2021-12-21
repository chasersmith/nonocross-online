import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  title = 'nonocross-online';
  version = "v0.0.1";
  iconGithub = faGithub;

  constructor() {}

  ngOnInit(): void {


  }
}
