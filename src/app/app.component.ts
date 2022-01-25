import { Component } from '@angular/core';
import { NbSidebarState } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-journey-website';
  isCollapsed = false;
  sidebarState: NbSidebarState = "compacted";

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.updateToggleState();
  }

  updateToggleState(): void {
    if (this.isCollapsed) {
      this.sidebarState = "compacted";
    } else {
      this.sidebarState = "expanded";
    }
  }
}
