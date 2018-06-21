import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true } );
