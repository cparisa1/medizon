import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  public medicines;
  public response = [{
    "_id": {
        "$oid": "5eb909a37c213e5d2fa7fb3c"
    },
    "name": "Neocitran",
    "image": "neocitran_cold.jpg",
    "quantity": "100mg",
    "price": "10",
    "desc": [
        "Controls Bindii",
        "Catsear",
        "Clover",
        "Creeping Oxalis",
        "Cudweed",
        "Dandelion",
        "Plantain",
        "Systemic Herbicides"
    ]
},
{
  "_id": {
      "$oid": "5eb909a37c213e5d2fa7fb3d"
  },
  "name": "Neocitran Cold",
  "image": "neocitran_colds.jpg",
  "quantity": "100mg",
  "price": "10",
  "desc": [
      "Controls Bindii",
      "Catsear",
      "Clover",
      "Creeping Oxalis",
      "Cudweed",
      "Dandelion",
      "Plantain",
      "Systemic Herbicides"
  ]
},
{
  "_id": {
      "$oid": "5eb909a37c213e5d2fa7fb3e"
  },
  "name": "Neocitran Total",
  "image": "neocitran_total.jpg",
  "quantity": "200mg",
  "price": "10",
  "desc": [
      "Controls Bindii",
      "Catsear",
      "Clover",
      "Creeping Oxalis",
      "Cudweed",
      "Dandelion",
      "Plantain",
      "Systemic Herbicides"
  ]
},
{
  "_id": {
      "$oid": "5eb909a37c213e5d2fa7fb3f"
  },
  "name": "Cetrizine",
  "image": "cetrizine.jpg",
  "quantity": "100mg",
  "price": "10",
  "desc": [
      "Controls Bindii",
      "Catsear",
      "Clover",
      "Creeping Oxalis",
      "Cudweed",
      "Dandelion",
      "Plantain",
      "Systemic Herbicides"
  ]
},
{
  "_id": {
      "$oid": "5eb909a37c213e5d2fa7fb3g"
  },
  "name": "Aspirin",
  "image": "aspirin.jpg",
  "quantity": "100mg",
  "price": "10",
  "desc": [
      "Controls Bindii",
      "Catsear",
      "Clover",
      "Creeping Oxalis",
      "Cudweed",
      "Dandelion",
      "Plantain",
      "Systemic Herbicides"
  ]
},
{
  "_id": {
      "$oid": "5eb909a37c213e5d2fa7fb3h"
  },
  "name": "Paracetamol",
  "image": "paracetamol.jpg",
  "quantity": "100mg",
  "price": "10",
  "desc": [
      "Controls Bindii",
      "Catsear",
      "Clover",
      "Creeping Oxalis",
      "Cudweed",
      "Dandelion",
      "Plantain",
      "Systemic Herbicides"
  ]
}
];
  
  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.medicines = this.response;
    console.log(this.apiService.getMedicines().subscribe(res => {
      //console.log(res);
      this.medicines = this.response;
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
