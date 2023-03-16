import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css'],
})
export class CardHeroComponent implements OnInit {
  characters!: any[];
  searchText: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res) => {
        console.log(res);
        this.characters = res.results;
      });
  }

  onSearch(value: string) {
    console.log(value);
    // if (value && value.length > 4) {
    //   this.router.navigate([''], {
    //     queryParams: { q: value },}
    //   });
  }
}
