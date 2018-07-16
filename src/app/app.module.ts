import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PlacesComponent } from './places/places.component';
import { WelcomeHomePageComponent } from './welcome-home-page/welcome-home-page.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeRoleComponent } from './employee-role/employee-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ProductsInventoryComponent } from './products-inventory/products-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    WelcomePageComponent,
    PlacesComponent,
    WelcomeHomePageComponent,
    ShowEmployeesComponent,
    AddNewEmployeeComponent,
    EmployeeRoleComponent,
    EditRoleComponent,
    ProductsInventoryComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
