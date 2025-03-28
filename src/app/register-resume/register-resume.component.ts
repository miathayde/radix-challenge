import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResumeModel } from '../../models/resume';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-register-resume',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  templateUrl: './register-resume.component.html',
  styleUrl: './register-resume.component.scss'
})
export class RegisterResumeComponent {
  resume: ResumeModel = new ResumeModel();
  genderOptions: Array<string> = [
    "Mulher cisgênero", "Mulher transgênero", "Homem cisgênero", "Homem transgênero", "Outro", "Prefiro não responder"
  ];

}
