import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {User} from '@shared/models/userRegister.model';
//import {UserInfoModel} from '../../shop/users/models/user-info.model';
import {EndPoints} from '@shared/end-points';
import {AuthService} from '@core/auth.service';
import {Finding} from '../models/finding.model';



@Injectable({
  providedIn: 'root',
})
export class UserCompleteService {

  constructor(private httpService: HttpService, private authService: AuthService) {
  }

  searchCompleteUser(mobile: number): Observable<User> {
    return this.httpService
      .get(EndPoints.FINDINGS + '/' + mobile);
  }

  getCompleteUsers(): Observable<User[]> {
    return this.httpService
      .get(EndPoints.FINDINGS);
  }

  setCompleteUser(oldMobile: number, newUser: User): Observable<User>{
    return this.httpService
      .successful()
      .put(EndPoints.FINDINGS + '/' + oldMobile, newUser);
  }

  createCompleteUser(user: User): Observable<User>{
    return this.httpService
      .post(EndPoints.FINDINGS + '/' + this.authService.getRole(), user);
  }

 

  find = (Finding) =>{
    id: "f6e66866-ea81-448c-a082-c280c7457500";
    scientific_type: "Carabus granulatus";
    author: "Linnaeus, 1758";
    characteristic: "Carabus granulatus s.str.";
    location_name: "Gnemern";
    coordinate_x:  4632222;
    coordinate_y: 5949115;
    altitude: 10;
    tolerance: "genau bis 100 m";
    region: "D-Mecklenburg-Vorpommern";
    date_of_creation: "2021-06-06";
    observer: "Meitzner,V.";
    quantity: 1;
    source_of_origin: "Alte Datenbank Müller-Motzfeld";
    genus: "Leistus";
    species: "Felipe";

  }





  createCompleteFinding(finding:Finding): Observable<Finding>{
       return this.httpService
      .post(EndPoints.FINDINGS, finding);
    }
  deleteCompleteUser(mobile: number): Observable<User[]>{
      return  this.httpService
        .delete(EndPoints.FINDINGS + '/' + mobile);
  }
}
