import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.page.html',
  styleUrls: ['./view-todo.page.scss'],
})
export class ViewTodoPage implements OnInit {
  public todo: Todo;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.find(parseInt(id, 10)).then(response => {
      this.todo = response.data;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
