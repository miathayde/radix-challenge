import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfessionalExperienceModel } from '../../../models/professional-experience';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-professional-experience',
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent implements OnInit {
  @Output() data: EventEmitter<ProfessionalExperienceModel[]> = new EventEmitter<ProfessionalExperienceModel[]>();
  @Input() experiences: Array<ProfessionalExperienceModel> = [];

  months: Array<string> = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];
  workModels: Array<string> = [
    "CLT",
    "PJ",
    "Estágio",
    "Terceirizado",
    "Autônomo",
    "Outro"
  ];

  ngOnInit(): void {
    if (this.experiences.length == 0) {
      this.addExperience();
    }
  }

  onFormsChange() {
    this.data.emit(this.experiences);
  }

  addExperience() {
    this.experiences.push({
      company: '',
      initialMonth: '',
      initialYear: null,
      endMonth: '',
      endYear: null,
      position: '',
      country: '',
      workModel: '',
      description: '',
      actualWork: false
    });
  }

  removeExperience() {
    this.experiences.pop();
  }

  onToggleActualWork(index: number) {
    if (this.experiences[index].actualWork) {
      this.experiences[index].endMonth = '';
      this.experiences[index].endYear = null;
    }
  }
}
