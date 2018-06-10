import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WodePage } from '../wode/wode';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = WodePage;

  constructor() {

  }

  
}
