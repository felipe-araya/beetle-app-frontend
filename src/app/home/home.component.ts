import { map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {UserCompleteService} from '@shared/services/userComplete.service';
import {Subscription} from 'rxjs';
import {Finding} from '../shared/models/finding.model';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MapComponent} from './map/map.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { of } from 'rxjs';

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-fiori/dist/SideNavigation.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/history.js";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/map.js";
import "@ui5/webcomponents-icons/dist/table-view.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";
import "@ui5/webcomponents/dist/MultiComboBox";
import "@ui5/webcomponents-fiori/dist/Page.js";
import "@ui5/webcomponents/dist/SegmentedButton";
import "@ui5/webcomponents/dist/ToggleButton";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";
import { FindingService } from './finding-management/finding.service';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;

  findings = of([]);


  // ui5Tab.addEventListener('tab-select', this.addData);



  public changeValue = false;
  public changeValue2 = false;

 /*  onLoginSubscription: Subscription;

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

  } */



  constructor(public mediaObserver: MediaObserver, private findingService: FindingService) { }

  ngOnInit(): void {

    // this.mediaSub = this.mediaObserver.asObservable().subscribe(p => {

    //   })

    this.findingService.searchAll().subscribe(x=>{
      console.log("THIS VALUE:",x);


    });

    const ui5Tab = document.querySelector('ui5-tab').addEventListener('click', this.addData);
    console.log('VALUE:', ui5Tab);

    //this.onLoginSubscription = this.userCompleteService.createCompleteFinding(this.find).subscribe();
    // this.checkTab();
  }

  ngOnDestroy(){}

  login(): void {
    //this.dialog.open(LoginDialogComponent)
    //  .afterClosed()
     // .subscribe(() => this.username = this.authService.getName());
  }

  register(): void {
   // this.dialog.open(RegisterDialogComponent);
  }

  logout(): void {
    //this.authService.logout();
  }

  cart(): void {
  }

  isAuthenticated(): void {
    //return this.authService.isAuthenticated();
  }

  search(value): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenavModule;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  addData(){
    this.changeValue = !this.changeValue;
  }

  checkTab(){
    this.changeValue=!this.changeValue;
    this.changeValue2 = false;

  }

  checkTab2(){
    this.changeValue2=!this.changeValue2;
    this.changeValue = false;
    this.searchAll();

  }

  searchAll(): void {
    this.findings = this.findingService.searchAll();
    }


}
