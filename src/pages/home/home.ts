 
import { Component } from '@angular/core';
import { CompAlertsPage } from '../comp-alerts/comp-alerts';
import { CompActionsheetPage } from '../comp-actionsheet/comp-actionsheet';
import { CompBadgePage } from '../comp-badge/comp-badge';
import { CompButtonsPage } from '../comp-buttons/comp-buttons';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataprovider: any[] = [
    {
      label: "Action Sheets",
      page: CompActionsheetPage,
      value: 0
    },
    {
      label: "Alerts",
      page: CompAlertsPage,
      value: 1
    },
    {
      label: "Badges",
      page: CompBadgePage,
      value: 1
    },
    {
      label: "Buttons",
      page: CompButtonsPage,
      value: 1
    }
  ];

  constructor(public navCtrl: NavController) {
    
  }
 

  itemSelected(item) {
    
    this.navCtrl.push(item.page, {param:item})
 
    
  }


}
