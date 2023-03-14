import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  list?: List;
  ngOnInit(): void {}

  createList(title: string) {
    this.taskService.createList(title).subscribe((list) => {
      console.log('+++', list);

      // Now we navigate to /lists/task._id
      this.router.navigate(['../profile'], { relativeTo: this.route });
    });
  }
}
