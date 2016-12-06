import { Component } from '@angular/core';

import { MainPage } from '../main/main';
import { UserPage } from '../user/user';
import { HistoryPage } from '../history/history';
import { VoucherPage } from '../voucher/voucher';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MainPage;
  tab2Root: any = UserPage;
  tab3Root: any = HistoryPage;
  tab4Root: any = VoucherPage;


  constructor() {

  }
}
