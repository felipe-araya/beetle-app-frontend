import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {UserCompleteService} from '@shared/services/userComplete.service';
import {Subscription} from 'rxjs';
import {Finding} from '../shared/models/finding.model';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MapComponent} from './map/map.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MediaObserver, MediaChange } from '@angular/flex-layout';


@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;

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



  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {

    // this.mediaSub = this.mediaObserver.asObservable().subscribe((result: MediaChange)=> {
    //   console.log(result.mqAlias);
    // })

    //this.onLoginSubscription = this.userCompleteService.createCompleteFinding(this.find).subscribe();


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

}
