import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-becomeclient',
  standalone: true,
  imports: [FooterComponent, ContactComponent, FaqComponent],
  templateUrl: './becomeclient.component.html',
  styleUrl: './becomeclient.component.css'
})
export class BecomeclientComponent {
  

}
