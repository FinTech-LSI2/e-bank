import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../sidebar-admin/sidebar-admin.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboardadmin',
    imports: [CommonModule, RouterOutlet, SidebarAdminComponent],
    templateUrl: './dashboardadmin.component.html',
    styleUrl: './dashboardadmin.component.css'
})
export class DashboardadminComponent {

}
