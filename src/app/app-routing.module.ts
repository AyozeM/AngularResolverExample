import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './views/account-list/account-list.component';
import { AccountDetailsComponent } from './views/account-details/account-details.component';
import { AppResolverService } from './services/resolver/app-resolver.service';

const routes: Routes = [
  {
    path:'',
    component:AccountListComponent
  },
  {
    path:'details/:id',
    component:AccountDetailsComponent,
    resolve:{
      account:AppResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AppResolverService]
})
export class AppRoutingModule { }
