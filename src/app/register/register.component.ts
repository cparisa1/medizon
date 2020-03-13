import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username:string;
  public email:string;
  public password:string;
  public password2:string;
  public obj:any;

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.username=this.email=this.password=this.password2=null;
  }

  registerUser() {
    //alert(this.username);
    this.obj={
        "name": this.username,
        "email": this.email,
        "password": this.password
    }

    this.apiService.apiPostUser(this.obj).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error);
      //alert("Successfully Registerd");
      this.username=this.email=this.password=this.password2=null;
      this.router.navigate(['/registerConfirm']);
    })
    
  }

}
