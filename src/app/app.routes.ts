import { Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { RegisterResumeComponent } from './register-resume/register-resume.component';

export const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'register-resume', component: RegisterResumeComponent}
];
