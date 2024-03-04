import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';
import { loadRemoteModule } from "@angular-architects/module-federation-runtime";

export function initializeApp(): () => void {
  return () => {
    loadRemoteModule({
      remoteEntry: 'http://localhost:9000/remoteEntry.js',
      remoteName: 'mfe_react',
      exposedModule: './app',
    });
  };
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
