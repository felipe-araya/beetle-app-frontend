import { Component, OnInit } from '@angular/core';
import { CrudComponent } from '../../shared/components/crud/crud.component';
import { SharedModule } from '@shared/shared.module';
import { FindingService } from './finding.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Finding } from '@shared/models/finding.model';
import { FindingCreationDialogComponent } from './finding-creation-dialog.component';
import { ReadDetailDialogComponent } from '@shared/dialogs/read-detail.dialog.component';
import { FindingUpdateDialogComponent } from './finding-update-dialog.component';


@Component({
  selector: 'app-finding-management',
  templateUrl: './finding-management.component.html',
  styleUrls: ['./finding-management.component.css']
})
export class FindingManagementComponent implements OnInit {

  title: string = 'Finding'
  findings = of([]);


  constructor(private dialog: MatDialog, private findingService: FindingService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.dialog
      .open(FindingCreationDialogComponent)
      .afterClosed()
      .subscribe(() => this.searchAll());
  }

  searchAll(): void {
  this.findings = this.findingService.searchAll();
  }
  
  
  read(finding: Finding): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Findings Details',
        object: this.findingService.read(finding.id)
      }
    });
  } 

  update(finding: Finding): void {
    this.findingService.update(finding)
      .subscribe(data => {
        this.dialog.open(FindingUpdateDialogComponent, {data
        })
          .afterClosed()
          .subscribe(() => this.searchAll());
      })

  }

  delete(finding: Finding): void {
    this.findingService
      .delete(finding.id)
      .subscribe(() => this.searchAll());
  }
}



