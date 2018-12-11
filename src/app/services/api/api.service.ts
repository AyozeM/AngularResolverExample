import { Injectable } from '@angular/core';
import { BankAccount } from "./BankAccount";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private bankAccounts: BankAccount[] = [
    new BankAccount({id:1234,name:'suso',type:'corriente',ammount:250}),
    new BankAccount({id:4567,name:'mamel',type:'ahorro',ammount:500}),
    new BankAccount({id:7894,name:'lola',type:'ahorro',ammount:460}),
    new BankAccount({id:3698,name:'maria',type:'corriente',ammount:800}),
  ];

  getBankAccounts():Observable<BankAccount[]>{
    return of(this.bankAccounts);
  }

  getAccountById(id:number): Observable<BankAccount>{
    return of(this.bankAccounts.find(e => e.getId() == id));
  }
}
