import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-medicines',
  templateUrl: './my-medicines.component.html',
  styleUrls: ['./my-medicines.component.css']
})
export class MyMedicinesComponent implements OnInit {

  public medicines;
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    //alert("This is my-medicine");
    console.log(this.apiService.getMedicines().subscribe(res => {
      //console.log(res);
      this.medicines = res;
      console.log(this.medicines[0]);
    },
    console.error
  ))
  }

  navigateToOrder($event, medicineId) {
    //alert(medicineId.$oid);
   
    this.router.navigate(['/medicines/'+medicineId.$oid]);
  }

}
