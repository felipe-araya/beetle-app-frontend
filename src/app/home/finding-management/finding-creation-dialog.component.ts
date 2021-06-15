import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Finding} from '@shared/models/finding.model';
import {FindingService} from './finding.service';
import {AuthService} from '@core/auth.service';

@Component({
  templateUrl: 'finding-creation-dialog.component.html',
  styleUrls: ['finding-dialog.component.css']
})

export class FindingCreationDialogComponent {
  finding: Finding;
  action: string;

    constructor(private findingService: FindingService, private dialog: MatDialog) {
    this.finding = {
                    scientific_type: undefined, 
                    author: undefined, 
                    characteristic: undefined, 
                    location_name: undefined,
                    coordinate_x: undefined,
                    coordinate_y: undefined,
                    altitude: undefined,
                    tolerance: undefined,
                    region: undefined,
                    date_of_creation: undefined,
                    observer: undefined,
                    quantity: undefined,
                    source_of_origin: undefined,
                    genus: undefined,
                    species: undefined
                }; 
    }

    create(): void {
        this.findingService
        .create(this.finding)
        .subscribe(() => this.dialog.closeAll());
    }

    invalid(): boolean {
        return this.check(this.finding.scientific_type) || 
               this.check(this.finding.author) ||
               this.check(this.finding.characteristic) ||
               this.check(this.finding.location_name) ||
               //this.check(this.finding.coordinate_x) ||
               //this.check(this.finding.coordinate_y) ||
               //this.check(this.finding.altitude) ||
               this.check(this.finding.date_of_creation) ||
               this.check(this.finding.observer) ||
               //this.check(this.finding.quantity) ||
               this.check(this.finding.source_of_origin) ||
               this.check(this.finding.genus) ||
               this.check(this.finding.species) ;
    }

    check(attr: string): boolean {
        return attr === undefined || null || attr === '';
    }
}
