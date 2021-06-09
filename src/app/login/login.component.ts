import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  recoverPassword(): void {
    //this.dialog.closeAll();
    //this.dialog.open(RecoverPasswordDialogComponent);
  }
  login():void{



  }

}
