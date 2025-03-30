import { PersonalDataModel } from "./personal-data";
import { ProfessionalExperienceModel } from "./professional-experience";

export class RegisterResumeModel {
  personalData: PersonalDataModel = new PersonalDataModel();
  professionalExperiences: Array<ProfessionalExperienceModel> = new Array<ProfessionalExperienceModel>();
}
