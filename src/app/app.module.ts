import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CompAlertsPage } from '../pages/comp-alerts/comp-alerts';
import { CompActionsheetPage } from '../pages/comp-actionsheet/comp-actionsheet';
import { CompBadgePage } from '../pages/comp-badge/comp-badge';
import { CompButtonsPage } from '../pages/comp-buttons/comp-buttons';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // new components
    CompAlertsPage,
    CompActionsheetPage,
    CompBadgePage,
    CompButtonsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // new components
    CompAlertsPage,
    CompActionsheetPage,
    CompBadgePage,
    CompButtonsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
