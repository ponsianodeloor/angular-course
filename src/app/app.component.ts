import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseComponent} from "./components/course/course.component";
import {COURSES} from "../db-data";
import {Course} from "./models/course";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  courses = COURSES;

  onCourseSelected(course:Course) {
        console.log('Course details by appComponent: ', course);
  }
}
