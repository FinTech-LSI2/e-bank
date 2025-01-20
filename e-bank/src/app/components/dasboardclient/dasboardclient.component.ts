import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from "../sidebar-client/sidebar-client.component";

@Component({
  selector: 'app-dasboardclient',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarClientComponent],
  templateUrl: './dasboardclient.component.html',
  styleUrl: './dasboardclient.component.css'
})
export class DasboardclientComponent {

}