import { PersonalDataComponent } from "../app/register-resume/personal-data/personal-data.component";
import { ProfessionalExperienceModel } from "./professional-experience";

export class RegisterResumeModel {
  personalData: PersonalDataComponent = new PersonalDataComponent();
  professionalExperiences: Array<ProfessionalExperienceModel> = [];
}
