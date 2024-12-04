import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Correct import
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';

@NgModule({
  declarations: [
      // Declare components here
    // Declare your HomeComponent here
  ],
  imports: [AppComponent,BrowserModule, HomeComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // You don't need to import CommonModule here for AppModule
  bootstrap: [] // Bootstrap your root component
})
export class AppModule {}
