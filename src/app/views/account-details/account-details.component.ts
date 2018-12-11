import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankAccount } from 'src/app/services/api/BankAccount';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  ActualAccount:BankAccount;
  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.ActualAccount = this.route.snapshot.data.account;
    console.log(this.route.snapshot.data.account);
  }

}
