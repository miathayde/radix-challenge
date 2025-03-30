import { Component, ViewChild } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { ProfessionalExperienceModel } from '../../models/professional-experience';
import { RegisterResumeModel } from '../../models/register-resume';

@Component({
  selector: 'app-register-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PersonalDataComponent,
    ProfessionalExperienceComponent,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule
  ],
  templateUrl: './register-resume.component.html',
  styleUrl: './register-resume.component.scss'
})
export class RegisterResumeComponent {
  experiences: Array<ProfessionalExperienceModel> = [];
  registerResume: RegisterResumeModel = new RegisterResumeModel();
  selectedTabIndex: number = 0;
  showJSON: boolean = false;

  setPersonalData(data: PersonalDataModel) {
    this.registerResume.personalData = data;
  }

  setExperiences(data: ProfessionalExperienceModel[]) {
    this.registerResume.professionalExperiences = data;
  }

  nextTab() {
    this.selectedTabIndex = 1;
  }

  cleanAll() {
    this.registerResume.personalData = new PersonalDataModel();
  }

  send() {

  }
}
