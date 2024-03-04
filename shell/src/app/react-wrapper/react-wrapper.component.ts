import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss']
})
export class ReactWrapperComponent implements AfterViewInit {
  @ViewChild('customReactComponentContainer', { static: true }) containerRef!: ElementRef;
  root!: any;
  constructor() { }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render('Loading script...');
    try {
      import('mfe_react/app').then((val) => {
        this.root.render(
          React.createElement(val.App),
        );
      });
    } catch (error) {
      console.log('Error', error);
    }
  }

  ngOnDestroy() {
    this.root.unmount();
  }

}
