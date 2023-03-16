import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  searchText: any;
  characters!: any[];

  ngOnInit(): void {}

  constructor(private router: Router) {}
}
