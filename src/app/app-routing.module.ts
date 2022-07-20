import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'confirm', component: ConfirmComponent },
  { path: 'edu-info', component: EduInfoComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: '', redirectTo: '/user-info', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
