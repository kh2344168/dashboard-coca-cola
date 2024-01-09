import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarItems = [
    { icon: 'assets/Dashboard.png', label: 'dashboard', active: true },
    { icon: 'assets/machine.png', label: 'machine', active: false },
    { icon: 'assets/planning.png', label: 'planning', active: false },
    { icon: 'assets/reports.png', label: 'reports', active: false }
  ];
}
