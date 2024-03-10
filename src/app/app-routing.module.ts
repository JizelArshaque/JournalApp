import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { ViewjournalComponent } from './viewjournal/viewjournal.component';
import { authGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[authGuardGuard]},
  {path:'myaccount',component:MyAccountComponent,canActivate:[authGuardGuard]},
  {path:'addJournal',component:AddJournalComponent},
  {path:'viewjournal/:id',component:ViewjournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
