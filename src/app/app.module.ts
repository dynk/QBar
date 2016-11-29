import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserPage } from '../pages/user/user';
import { ContactPage } from '../pages/contact/contact';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultPage } from '../pages/result/result';
import { VoucherPage } from '../pages/voucher/voucher';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    ContactPage,
    MainPage,
    ResultPage,
    VoucherPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    ContactPage,
    MainPage,
    ResultPage,
    VoucherPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
