import { ChangeDetectorRef, Component, inject, TemplateRef, ViewChild } from '@angular/core';
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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

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
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './register-resume.component.html',
  styleUrl: './register-resume.component.scss'
})
export class RegisterResumeComponent {
  registerResume: RegisterResumeModel = new RegisterResumeModel();
  selectedTabIndex: number = 0;
  showJSON: boolean = false;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  @ViewChild('dialogErrorTemplate') dialogErrorTemplate!: TemplateRef<any>;
  @ViewChild(PersonalDataComponent) personalComponent: PersonalDataComponent;
  @ViewChild(ProfessionalExperienceComponent) professionalComponent: ProfessionalExperienceComponent;
  dialogRef!: MatDialogRef<any>;
  errorDialogMessages: string[] = [];

  constructor(private matDialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {}

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
    this.registerResume = new RegisterResumeModel();
    this.cdref.detectChanges();
    this.personalComponent.setUrlInputs();
    this.professionalComponent.addExperience();
    this.selectedTabIndex = 0;
  }

  send() {
    if (this.validateForm()) {
      localStorage.setItem('register-resume',JSON.stringify(this.registerResume));
      this.dialogRef = this.matDialog.open(this.dialogTemplate);
      this.dialogRef.afterClosed().subscribe(result => {
        this.cleanAll();
      });
    } else {
      this.dialogRef = this.matDialog.open(this.dialogErrorTemplate);
    }
  }

  validateForm(): boolean {
    this.errorDialogMessages = [];
    const personal = this.registerResume.personalData;

    if (!personal.name) this.errorDialogMessages.push('Nome é um campo obrigatório.');
    if (!personal.lastName) this.errorDialogMessages.push('Sobrenome é um campo obrigatório.');
    if (!personal.birthday) this.errorDialogMessages.push('Data de nascimento é um campo obrigatório.');
    if (!personal.gender) this.errorDialogMessages.push('Gênero é um campo obrigatório.');
    if (!personal.email) this.errorDialogMessages.push('Email é um campo obrigatório.');
    if (!personal.phone) this.errorDialogMessages.push('Celular é um campo obrigatório.');

    if (personal.isBrasilian && !personal.cpf) {
      this.errorDialogMessages.push("É necessário preencher o campo CPF quando selecionado 'Sou brasileiro(a)'.");
    }
    if (personal.hasDisability && !personal.disability) {
      this.errorDialogMessages.push("É necessário preencher o campo 'Qual o tipo de deficiência?' quando selecionado 'sim' em 'Você possui alguma deficiência?'.");
    }

    if (this.errorDialogMessages.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
