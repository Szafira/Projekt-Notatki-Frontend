import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logging',
    component: LoggingComponent,
  },
  {
  path: 'TextEditor',
  component: TextEditorComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  } 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
