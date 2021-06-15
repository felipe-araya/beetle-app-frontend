import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {Finding} from '@shared/models/finding.model';
import {FindingService} from './finding.service';
import {AuthService} from '@core/auth.service';

@Component({
  templateUrl: 'finding-update-dialog.component.html',
  styleUrls: ['finding-dialog.component.css']
})

export class FindingUpdateDialogComponent {
  title: string = 'Update Complaint';
  finding: Finding;

  constructor(@Inject(MAT_DIALOG_DATA) data: Finding, private findingService: FindingService,
              private dialog: MatDialog) {
    this.finding = {id: data.id, 
                    scientific_type: data.scientific_type, 
                    author: data.author, 
                    characteristic: data.characteristic, 
                    location_name: data.location_name,
                    coordinate_x: data.coordinate_x,
                    coordinate_y: data.coordinate_y,
                    altitude: data.altitude,
                    tolerance: data.tolerance,
                    region: data.region,
                    date_of_creation: data.date_of_creation,
                    observer: data.observer,
                    quantity: data.quantity,
                    source_of_origin: data.source_of_origin,
                    genus: data.genus,
                    species: data.species
                };
  }

  /* update(): void {
    this.findingService
      .update(this.finding)
      .subscribe(() => this.dialog.closeAll());
  } */

  invalid(): boolean {
    return this.check(this.finding.id);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
