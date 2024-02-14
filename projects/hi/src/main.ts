import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { MyComponent } from './app/Component/my.component';


platformBrowserDynamic().bootstrapModule(AppModule)
//whatever module  receive that make into dynamic
// bootstrapping means  my browser becoming dynamic DOM
  .catch(err => console.error(err));
