import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

  @Input({
    required: true
  })
  course!: Course;

  constructor() {
  }

  ngOnInit() {

  }

}
