import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PlacesComponent } from './places/places.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomePageComponent, children: [
    { path: 'places', component: PlacesComponent },


  ]},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true } );
