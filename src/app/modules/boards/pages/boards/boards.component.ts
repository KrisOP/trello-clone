import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layout/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBox, faWaveSquare, faClock, faStar, faStairs , faGear, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers } from '@fortawesome/free-solid-svg-icons';
import {faTrello, } from '@fortawesome/free-brands-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent,FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html'
})


export class BoardsComponent {

  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faTrello = faTrello;
  faClock = faClock;
  faStar = faStar;
  faStairs = faStairs;
  faGear = faGear;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;

  favorite:boolean = true;

  items=[
    {
      label: 'Item 1',
      items: [
        { label: 'Item 1.1' },
        { label: 'Item 1.2' },
      ],
    },
    {
      label: 'Item 2',
      items: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2' },
      ]
    },
    {
      label: 'Item 3',
      items: [
        { label: 'Item 3.1' },
        { label: 'Item 3.2' },
      ]
    },
]
}
