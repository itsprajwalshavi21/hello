import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-faculty-index',
  templateUrl: './faculty-index.component.html',
  styleUrls: ['./faculty-index.component.css'],
})
export class FacultyIndexComponent implements OnInit {

  users? : User[];
  constructor( private taskService: TaskService,
    private route: ActivatedRoute,
    private router : Router) 
  {
  }


  ngOnInit(): void {

    this.taskService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

}
