import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public sessionDetails;
  KEY = 'CART';
  counter: number = 1;
  public updatedPrice:number;
  selectedNumber : number = 1;
  //i: number = 1;
  grand_total: number=0;


  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public local: LocalStorageService, public session: SessionStorageService,
    private router: Router) { }

  ngOnInit() {
    this.counter =1;
    //this.i = 1;
    this.sessionDetails = this.local.get(this.KEY);
    console.log(this.sessionDetails);
    //this.updatedPrice =this.sessionDetails.price;
    this.getGrandTotal();
  }

  inc(i){
    this.counter =this.counter+1;
    this.sessionDetails[i].name= this.counter;
    //alert(this.counter);
    //this.sessionDetails[i]
    //this.updatedPrice = this.sessionDetails.price*this.counter;
  }

  dec(i){
    if(this.counter > 1){
    this.counter =this.counter-1;
    this.sessionDetails[i].name= this.counter;
    //alert(this.counter);
    //this.updatedPrice = this.sessionDetails.price*this.counter;
    }
  }

  updateCartToCheckout(){
    this.sessionDetails.price = this.updatedPrice;
    this.local.set(this.KEY, this.sessionDetails);
    this.local.set('TOTAL_PRICE', this.grand_total);
    this.router.navigate(['/checkout']);
  }

  getGrandTotal(){
    this.grand_total = 0;
    this.local.get(this.KEY).forEach(element => {
      console.log(element);
      this.grand_total = this.grand_total + element.total_price;
    });
    //alert(this.grand_total);
  }
  
  deleteFromCart(i){
    //alert(i);     
    
    this.sessionDetails.splice(i,1);
        //console.log(this.cartItem);
        this.local.set(this.KEY, this.sessionDetails);

        this.getGrandTotal();
  }
  

}


