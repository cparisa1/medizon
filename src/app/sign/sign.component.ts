import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public semail:string;
  public spassword:string;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public local: LocalStorageService, public session: SessionStorageService) { }

  ngOnInit() {
    this.semail=this.spassword=null;
  }

  userSignIn() {
    
    this.apiService.apiGetUser(this.semail).subscribe(res => {
      //console.log(res);
      //this.semail = res;
      if(res == null){
        alert("Please Enter Correct Email or Password");
      }else{
        this.local.set('User', res);
        alert("Successfully Logged In");
        window.location.reload();
        //this.router.navigate([""]);
      }
    })
  }

}
