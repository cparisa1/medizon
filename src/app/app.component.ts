import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'medizon-app';
  userDetails = null;
  userName = null;
  constructor(
    private apiService: ApiService,
    private router: Router,
    public local: LocalStorageService, public session: SessionStorageService) { }

  ngOnInit() {
  if(this.local.get('User') != null){
    //alert("User Exists");
    this.userDetails = this.local.get('User');
    this.userName = this.userDetails.name;

  }
  else{
    //alert("User Not exists");

  }
  }

  logout(){
    this.local.remove('User');
  }
  
}
