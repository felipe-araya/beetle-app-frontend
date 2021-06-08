import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents-fiori/dist/ShellBar"; 
import "@ui5/webcomponents-fiori/dist/SideNavigation.js"; 
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";




@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
