import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { BoardUserComponent } from 'src/app/components/board-user/board-user.component';
import { BoardModeratorComponent } from 'src/app/components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from 'src/app/components/board-admin/board-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'itemDetails/: id', component: ItemDetailsComponent },
  { path: 'showItems', component: ShowItemsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
