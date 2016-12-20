import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserPage } from '../pages/user/user';
import { HistoryPage } from '../pages/history/history';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultPage } from '../pages/result/result';
import { VoucherPage } from '../pages/voucher/voucher';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FirebaseModule } from '../providers/firebase';

import { Storage } from '@ionic/storage';
import { ParseProvider } from '../providers/parse-provider';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    MyApp,
    UserPage,
    HistoryPage,
    MainPage,
    ResultPage,
    VoucherPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FirebaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    HistoryPage,
    MainPage,
    ResultPage,
    VoucherPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ParseProvider, UserData, Storage]
})
export class AppModule {}
