import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

  @Input()
  title: string | undefined;

  constructor() {

  }

  ngOnInit() {
    console.log(this.title);
  }

}
