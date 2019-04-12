import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit {
  public todos: any[];
  public multiTodo: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
        if (params.id) {
          this.todos = this.route.snapshot.data.todo;
        } else {
          this.todos = this.route.snapshot.data.todos;
          this.multiTodo = true; 
        }
    });
    //console.log(this.todos);
  }
}
