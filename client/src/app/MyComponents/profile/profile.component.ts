import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  lists?: List[];
  tasks?: Task[];
  users?: User[];

  selectedListId!: string;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router : Router

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['profileID']) {
        this.selectedListId = params['profileID'];
        this.taskService
          .getTasks(params['profileID'])
          .subscribe((tasks: any) => {
            // console.log(params);
            this.tasks = tasks;
          });
      } else {
        this.tasks = undefined;
      }
    });

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
      console.log(lists);
    });
  }

  deleteList() {
    this.taskService.deleteList(this.selectedListId).subscribe((res : any) => {
      this.router.navigate(['/profile'])
      console.log(res);
    });
  }

  deleteTask(id : string) {
    this.taskService.deleteTask(this.selectedListId,id).subscribe((res : any) => {
      this.tasks = this.tasks!.filter(val => val._id != id );
      console.log(res);
    });
  }

  LogOut()
  {
    this.authService.logout();
  }

  getId() {
    console.log();
  }
}
