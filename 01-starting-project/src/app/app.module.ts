import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //required for any module based projects

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ], //non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule], //standalone components
})
export class AppModule {}
