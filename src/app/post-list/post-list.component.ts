import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: 'Type Script',
      content:
        'TypeScript is a statically-typed superset of JavaScript that adds optional type annotations and other features to help developers write more maintainable and robust code. ',
    },
    {
      id: 2,
      title: 'Binary Search Algorithm',
      content:
        'Binary search is an efficient algorithm for finding a specific item in a sorted list. It works by repeatedly dividing the list in half and comparing the middle element to the target item. For example, suppose we have a sorted list of integers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. If we want to search for the number 7 using binary search, the steps would be as follows: ',
    },
    {
      id: 3,
      title: 'Java Script',
      content:
        'Java is a high-level, general-purpose programming language designed to be portable and platform-independent, meaning that code written in Java can run on any platform with a Java Virtual Machine (JVM). ',
    },
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((value) => {
      const page = value.get('page');
      const order = value.get('orderBy');
      console.log(page);
      console.log(order);
    });
  }
}
