import { NgStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}
  facultyName: any;
  getUsers() {
    return this.webReqService.get('view');
  }

  getLists() {
    return this.webReqService.get('lists');
  }

  showLists() {
    return this.webReqService.get('viewLists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {
      title,
    });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    console.log(listId);
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  showTasks(listId: string) {
    console.log(listId);
    return this.webReqService.get(`viewLists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    // We want to send a web request to create a task
    console.log(listId);
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }
}
