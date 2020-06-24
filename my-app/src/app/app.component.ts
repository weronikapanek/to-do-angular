import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone : Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask="";
    console.log(this.tasksList)

  }

  remove(task: string){
    this.tasksList = this.tasksList.filter (e => e !== task);
  }

  done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
  }
}
