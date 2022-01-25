import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Constants } from 'src/shared/constants';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

  items: NbMenuItem[] = [];

  menuItems = Constants.MenuItems;

  constructor() { }

  ngOnInit(): void {
    this.populateMenu(this.menuItems as unknown as NbMenuItem[]);
  }

  populateMenu(menuItems: NbMenuItem[]): void {
    menuItems.forEach(item => { this.items.push(item); });
  }

}
