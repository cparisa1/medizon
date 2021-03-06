import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../services/api.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-medicines-info',
  templateUrl: './medicines-info.component.html',
  styleUrls: ['./medicines-info.component.css']
})
export class MedicinesInfoComponent implements OnInit {

  public medicineId:any;
  public medicineDetails;
  KEY = 'CART';
  value: any = null;
  cartItems = [];
  //arr_names = new Array(4);
  cartItem:any;
  cartIte :any = [];
  selectedNumber:number = 1;


  public medicines = [
    {
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

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public local: LocalStorageService, public session: SessionStorageService,
    private router: Router) { }

  ngOnInit() {
    this.cartItem = [];
    this.route.paramMap.subscribe(params => {
      this.medicineId = params.get("id")
    })
    this.medicineDetails = this.medicines.find(x=>x._id['$oid'] == this.medicineId);
    this.apiService.apiMedicine(this.medicineId).subscribe(res =>{
      console.log(res);
      this.medicineDetails=res;
      //this.cartItems.push(this.medicineDetails);
      this.onRowClick();
    })
    this.onRowClick();
  }

  onRowClick(){
    //alert(this.selectedNumber);
    this.medicineDetails.quantityItem = this.selectedNumber;
    this.medicineDetails.total_price = this.selectedNumber * this.medicineDetails.price;
    console.log(this.medicineDetails);
  }
  
  addToCart() {
    //let cartItem = [];
    ///this.cartItems.push(this.medicineDetails);
    if(this.local.get(this.KEY) !=null){
      //this.cartItem.push(this.local.get(this.KEY));
      //this.heroes.push(this.cartItem);
      this.local.get(this.KEY).forEach(element => {
        this.cartIte.push(element);
      });
      //this.cartIte=this.cartItem;
      this.cartIte.push(this.medicineDetails);
      this.local.set(this.KEY, this.cartIte);
    }
   else{
    if (typeof this.cartIte !== 'undefined')
    this.cartIte.push(this.medicineDetails);
    this.local.set(this.KEY, this.cartIte);
   }
   this.router.navigate(['/cart']);
  }
}
