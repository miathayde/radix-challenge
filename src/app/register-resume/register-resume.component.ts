import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonalDataComponent } from "./personal-data/personal-data.component";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonalDataModel } from '../../models/personal-data';

@Component({
  selector: 'app-register-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PersonalDataComponent,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './register-resume.component.html',
  styleUrl: './register-resume.component.scss'
})
export class RegisterResumeComponent {
  personalData: PersonalDataModel = new PersonalDataModel();
  selectedTabIndex: number = 1;

  setPersonalData(data: PersonalDataModel) {
    this.personalData = data;
  }
}
