import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-initial-page',
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent {

}
