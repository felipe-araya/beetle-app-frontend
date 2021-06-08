import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents-fiori/dist/ShellBar"; 
import "@ui5/webcomponents-fiori/dist/SideNavigation.js"; 
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";

import {UserCompleteService} from '@shared/services/userComplete.service';
import {Subscription} from 'rxjs';
import {Finding} from '../shared/models/finding.model';






@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onLoginSubscription: Subscription;

  find: Finding ={
    id: "f6e66866-ea81-448c-a082-c280c7457500",
    scientific_type: "Carabus granulatus",
    author: "Linnaeus, 1758",
    characteristic: "Carabus granulatus s.str.",
    location_name: "Gnemern",
    coordinate_x:  4632222,
    coordinate_y: 5949115,
    altitude: 10,
    tolerance: "genau bis 100 m",
    region: "D-Mecklenburg-Vorpommern",
    date_of_creation: "2021-06-06",
    observer: "Meitzner,V.",
    quantity: 1,
    source_of_origin: "Alte Datenbank Müller-Motzfeld",
    genus: "Leistus",
    species: "Felipe",

  }



  constructor(private userCompleteService: UserCompleteService) { }

  ngOnInit(): void {

    this.onLoginSubscription = this.userCompleteService.createCompleteFinding(this.find).subscribe();


  }

}
