import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { FacultyLoginComponent } from './MyComponents/faculty-login/faculty-login.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { FacultyIndexComponent } from './MyComponents/faculty-index/faculty-index.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { EditComponent } from './MyComponents/edit/edit.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebReqInterceptorService } from './web-req.interceptor.service';
import { NewListComponent } from './MyComponents/new-list/new-list.component';
import { NewTaskComponent } from './MyComponents/new-task/new-task.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { EditListComponent } from './MyComponents/edit-list/edit-list.component';
import { EditTaskComponent } from './MyComponents/edit-task/edit-task.component';
import { ProfileShowComponent } from './MyComponents/profile-show/profile-show.component';
// import { TaskViewComponent } from './MyComponents/task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyLoginComponent,
    PageNotFoundComponent,
    FacultyIndexComponent,
    ProfileComponent,
    EditComponent,
    NewListComponent,
    NewTaskComponent,
    SignUpComponent,
    EditListComponent,
    EditTaskComponent,
    ProfileShowComponent,
    // TaskViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
