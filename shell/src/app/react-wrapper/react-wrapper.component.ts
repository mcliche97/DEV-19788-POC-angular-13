import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {loadRemoteModule} from "@angular-architects/module-federation-runtime";
@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss']
})
export class ReactWrapperComponent implements AfterContentInit {
  @ViewChild('customReactComponentContainer', {read: ElementRef, static: true})
  reactWrapper!: ElementRef;

  @ViewChild('customReactComponentContainer', { static: true }) containerRef!: ElementRef;
  root!: any;
  constructor() { }

  ngAfterContentInit(): void {

    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render('Loading script...');

    const importFn = () => loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:9000/remoteEntry.js',
      remoteName: 'mfe_react',
      exposedModule: './app',
    });
    importFn()
      .then((val: any) =>{
        this.root.render(
          React.createElement(val.App),
        );
      })
      .catch((err) => console.log('error loading:', err));
  }
}
