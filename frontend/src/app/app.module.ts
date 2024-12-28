import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Correct import
import { RouterModule } from '@angular/router';
import { CreditRequestComponent } from './components/credit-request/credit-request.component'; // Correct import
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      // Declare components here
    // Declare your HomeComponent here
  ],
  imports: [AppComponent,BrowserModule, HomeComponent,FontAwesomeModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // You don't need to import CommonModule here for AppModule
  bootstrap: [] // Bootstrap your root component
})
export class AppModule {}
