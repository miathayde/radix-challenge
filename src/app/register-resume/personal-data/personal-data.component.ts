import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PersonalDataModel } from '../../../models/personal-data';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [
    CommonModule,
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
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss'
})
export class PersonalDataComponent {
  @Output() data: EventEmitter<PersonalDataModel> = new EventEmitter<PersonalDataModel>();
  @Input() personalData: PersonalDataModel = new PersonalDataModel();
  genderOptions: Array<string> = [
    "Mulher cisgênero", "Mulher transgênero", "Homem cisgênero", "Homem transgênero", "Outro", "Prefiro não responder"
  ];

  onFormsChange() {
    this.data.emit(this.personalData);
  }
}
