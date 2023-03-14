import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  listID! : string;
  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router : Router) { }

  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
        this.listID = params['profileID'];
    });
  }

  editList(title: string) {
    this.taskService.updateList(this.listID, title).subscribe(() => {
      this.router.navigate(['/profile', this.listID]);
    })
  }
}
