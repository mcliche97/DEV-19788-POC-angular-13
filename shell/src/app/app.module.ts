import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';
import { AngularWrapperComponent } from './angular-wrapper/angular-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactWrapperComponent,
    AngularWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
