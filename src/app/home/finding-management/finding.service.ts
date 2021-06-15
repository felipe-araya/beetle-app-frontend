import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Finding} from '@shared/models/finding.model';

@Injectable({
  providedIn: 'root'
})
export class FindingService {

  constructor(private httpService: HttpService) { }

  searchAll(): Observable<Finding[]> {
    return this.httpService
      .get(EndPoints.FINDINGS);
  }
  
  create(finding: Finding): Observable<Finding> {
    return this.httpService
      .post(EndPoints.FINDINGS, finding);
  }
  
  update(finding: Finding): Observable<Finding> {
  /* let complaintUpdate =
      this.complaints.find(c => c.id === complaint.id);
    const i = this.complaints.indexOf(complaintUpdate);
    if(i>=0) {
      this.complaints.splice(i, 1, complaint);
    }
    return of(complaint);*/ 
  return this.httpService
      .put(EndPoints.FINDINGS + '/' + finding.id, finding);
  }
  
  read(id: string): Observable<Finding> {
    return this.httpService
      .get(EndPoints.FINDINGS + '/' + id);
  } 
  
  delete(id: string): Observable<void>{
    return this.httpService
      .delete(EndPoints.FINDINGS + '/' + id );
  }
  





}

