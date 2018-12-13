import { Component, OnInit } from '@angular/core';
import { DumbServiceService, Course } from '../dumb-service.service';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css'],
  providers: [ DumbServiceService ]
})
export class DumbComponent implements OnInit {

  courses: string;

  constructor(private dumbService: DumbServiceService) {}

  ngOnInit() {
    
  }

  getCourses() {
    this.dumbService.getCourse().subscribe(courses => {
      this.courses = courses[0].name;
    });
  }

}
