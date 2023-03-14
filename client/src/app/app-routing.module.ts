import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyIndexComponent } from './MyComponents/faculty-index/faculty-index.component';
import { FacultyLoginComponent } from './MyComponents/faculty-login/faculty-login.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { NewListComponent } from './MyComponents/new-list/new-list.component';
import { NewTaskComponent } from './MyComponents/new-task/new-task.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { EditListComponent } from './MyComponents/edit-list/edit-list.component';
import { EditTaskComponent } from './MyComponents/edit-task/edit-task.component';
import { ProfileShowComponent } from './MyComponents/profile-show/profile-show.component';
// import { TaskViewComponent } from './MyComponents/task-view/task-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'faculty-login',
    component: FacultyLoginComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'faculty-index',
    component: FacultyIndexComponent,
  },
  {
    path: 'new-list',
    component: NewListComponent,
  },
  {
    path: 'edit-list/:profileID',
    component: EditListComponent,
  },
  {
    path: 'profile/:profileID/edit-task/:taskId',
    component: EditTaskComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile-show',
    component: ProfileShowComponent,
  },
  {
    path: 'profile/:profileID',
    component: ProfileComponent,
  },
  {
    path: 'profile-show/:profileID',
    component: ProfileShowComponent,
  },
  {
    path: 'profile/:profileID/new-task',
    component: NewTaskComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
