import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/auth/pages/login-page/login-page.component';

export const routes: Routes = [
    { path: 'login',title:"LogIn Page", component: LoginPageComponent },
    { path: 'home',title:"Home Page", component: HomePageComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
