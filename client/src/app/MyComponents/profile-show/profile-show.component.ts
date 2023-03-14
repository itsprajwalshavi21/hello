import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.css'],
})
export class ProfileShowComponent implements OnInit {
  lists?: List[];
  tasks?: Task[];

  selectedListId!: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   if (params['profileID']) {
    //     this.selectedListId = params['profileID'];
    //     console.log("----?",params);
    //     this.taskService.getTasks(params['profileID']).subscribe((tasks: any) => {
    //         console.log(tasks);
    //         this.tasks = tasks;
    //       });
    //   } else {
    //     this.tasks = undefined;
    //   }
    // });

    this.taskService.showLists().subscribe((lists: any) => {
      console.log(lists);
      this.lists = lists;
    });
  }
}
