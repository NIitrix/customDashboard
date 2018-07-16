import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PlacesComponent } from './places/places.component';
import { WelcomeHomePageComponent } from './welcome-home-page/welcome-home-page.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeRoleComponent } from './employee-role/employee-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ProductsInventoryComponent } from './products-inventory/products-inventory.component';


const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomePageComponent, children: [
    { path: 'WelcomeHomePage', component: WelcomeHomePageComponent },
    { path: 'showEmployees', component: ShowEmployeesComponent },
    { path: 'addEmployee', component: AddNewEmployeeComponent },
    { path: 'employeeRole', component: EmployeeRoleComponent },
    { path: 'editRole', component: EditRoleComponent },
    { path: 'productsInventory', component: ProductsInventoryComponent }
  ]},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true } );
