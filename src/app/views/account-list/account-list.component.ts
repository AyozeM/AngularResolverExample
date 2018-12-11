import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { BankAccount } from 'src/app/models/BankAccount';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  BankAccounts$: Observable<any>;
  LoadingError$ = new Subject<boolean>();

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.LoadingError$.next(false);
    this.BankAccounts$ = this.ApiService.getBankAccounts().pipe(
      catchError(err=>{
        console.error(err);
        this.LoadingError$.next(true);
        return of();
      })
    );
  }

}
