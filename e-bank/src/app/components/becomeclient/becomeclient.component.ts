import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { FaqComponent } from "../faq/faq.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { ClientFormComponent } from "../client-form/client-form.component";

@Component({
    selector: 'app-becomeclient',
    imports: [FooterComponent, ContactComponent, FaqComponent, NavbarComponent, ClientFormComponent],
    templateUrl: './becomeclient.component.html',
    styleUrl: './becomeclient.component.css'
})
export class BecomeclientComponent {


}
