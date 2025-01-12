import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //required for any module based projects
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './tasks/form/form.component';
import { TaskComponent } from './tasks/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    FormComponent,
    TaskComponent
  ], //non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule], //standalone components
})
export class AppModule {}
