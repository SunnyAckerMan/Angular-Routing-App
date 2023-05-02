import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Project';
  constructor(private router: Router) {}
  ngOnInit(): void {
    const obsTest$ = new Observable((observer) => {
      observer.next('Printed from Observer 1');
      observer.next('Printed from Observer 2');
      setTimeout(() => {
        observer.next('Printed from Observer 3');
      }, 2000);
    }).subscribe((value) => {
      console.log(value);
    });
  }
  onSubmit() {
    this.router.navigate(['/post'], { queryParams: { page: 1, order: 'new' } });
  }
}
