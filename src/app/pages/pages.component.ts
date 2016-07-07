import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { BaPageTop, BaContentTop, BaSidebar, BaBackTop } from '../theme/components';

import { Dashboard } from './dashboard';
import { Demos } from './demo/demo.component';
import { Managers } from './manager/manager.component';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: require('./pages.html')
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Managers',
    component: Managers,
    path: '/managers/...',
  },
  {
    name: 'Demos',
    component: Demos,
    path: '/demos/...',
  }
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
