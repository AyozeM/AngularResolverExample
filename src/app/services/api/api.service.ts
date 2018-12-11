import { Injectable } from '@angular/core';
import { BankAccount } from "../../models/BankAccount";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //Para ver el funcionamiento en memoria descomentar lo comentado y comentar el http y viceversa

/*   private bankAccounts: BankAccount[] = [
    new BankAccount({id:1234,name:'suso',type:'corriente',ammount:250}),
    new BankAccount({id:4567,name:'mamel',type:'ahorro',ammount:500}),
    new BankAccount({id:7894,name:'lola',type:'ahorro',ammount:460}),
    new BankAccount({id:3698,name:'maria',type:'corriente',ammount:800}),
  ]; */

  getBankAccounts():Observable<BankAccount[]>{
    return this.http.get<BankAccount[]>(`${environment.apiurl}/bancos`).pipe(map(e => e.map( y => new BankAccount(y))));
    //return of(this.bankAccounts);
  }

  getAccountById(id:number): Observable<BankAccount>{
    return this.http.get<BankAccount>(`${environment.apiurl}/banco/${id}`).pipe(map(e => new BankAccount(e)));
    //return of(this.bankAccounts.find(e => e.getId() == id));
  }
}
