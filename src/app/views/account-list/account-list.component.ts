import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { BankAccount } from 'src/app/services/api/BankAccount';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  BankAccounts:BankAccount[] = [];
  constructor(private ApiService:ApiService) { }

  ngOnInit() {
    this.ApiService.getBankAccounts().subscribe(
      dbAccounts => this.BankAccounts = dbAccounts,
      error =>{
        alert('Hubo un error mire la consola');
        console.error(error);

      }
    );
  }

}
