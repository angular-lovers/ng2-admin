import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './component/index'
import { APP_ROUTER_PROVIDERS } from './component/taurus.route.ts';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]).catch((err:any) => {
    console.log(err);
});