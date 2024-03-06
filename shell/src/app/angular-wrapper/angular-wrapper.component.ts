import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {loadRemoteModule} from "@angular-architects/module-federation-runtime";
import {createRoot} from "react-dom/client";
import * as React from "react";

@Component({
  selector: 'app-angular-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss']
})
export class AngularWrapperComponent implements AfterContentInit {

  @ViewChild('customAngularComponentContainer', {read: ElementRef, static: true})
  angularWrapper!: ElementRef;
  constructor() { }

  ngAfterContentInit(): void {

    const elementName = 'angular1-element';

    const importFn = () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3003/remoteEntry.js',
      exposedModule: './angModules'
    });
    importFn()
      .then((val: any) =>{
        console.log('module loaded');
      })
      .catch((err) => console.log(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
    this.angularWrapper.nativeElement.appendChild(element);

  }

}
