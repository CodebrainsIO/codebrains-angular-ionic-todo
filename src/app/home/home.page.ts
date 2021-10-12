import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos$: Todo[] = [];
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  submitForm(value: { title: string; completed: boolean }): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    value.completed = false;
    console.log('Submitted', value);
    /*this.todoService.create(value).then(response => {
      this.todoService.findAll().then((res) => {
        this.todos$ = response.data;
      });
    });*/
    this.validateForm.reset();
  }

  update(todo): void {
    const updatedTodo = Object.assign({}, todo);
    updatedTodo.completed = !updatedTodo.completed;
    console.log('Todo before update', updatedTodo);
  }
  delete(todo): void {
    console.log('Delete todo', todo);
  }
  ngOnInit(): void {
    this.todoService.findAll().then((response) => {
      this.todos$ = response.data;
    });

    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  refresh(ev) {
    this.todoService.findAll().then((response) => {
      this.todos$ = response.data;
      ev.detail.complete();
    });
  }
}
