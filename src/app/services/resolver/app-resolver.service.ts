import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../api/api.service';

@Injectable()
export class AppResolverService implements Resolve<any> {
  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('Route param --> ', route.params['id']);
    return this.apiService.getAccountById(parseInt(route.params['id']));
  }
}
