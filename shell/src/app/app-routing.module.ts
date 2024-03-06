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
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => {
        return m.MicrofrontendModule;
      }),
  },
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:7000/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Module1',
      }).then((m) => {
        return m.Microfrontend1Module;
      }),
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
