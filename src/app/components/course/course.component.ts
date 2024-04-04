import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  //@Output()
  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit() {

  }

  onCourseViewed(course:Course) {
    console.log('Course details: ', this.course);
    this.courseSelected.emit(this.course);
  }

}
