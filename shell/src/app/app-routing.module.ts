import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import {ReactWrapperComponent} from "./react-wrapper/react-wrapper.component";
import {AngularWrapperComponent} from "./angular-wrapper/angular-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'react',
    component: ReactWrapperComponent,
  },
  {
    path: 'angular14',
    component: AngularWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
