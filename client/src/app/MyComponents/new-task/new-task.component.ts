import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  listId: string = '';
  newTask?: Task;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // console.log('# ', params);
      this.listId = params['profileID'];
      // console.log(this.listId);
    });
  }

  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((newTask) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
