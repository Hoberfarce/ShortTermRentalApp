import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { SearchComponent } from './components/pages/search/search';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent }
];
