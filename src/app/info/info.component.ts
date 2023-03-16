import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  size = 8;
  characters: any;
  infoId!: string | null;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.infoId = this.route.snapshot.paramMap.get('id');
    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.infoId)
      .subscribe((res) => (this.characters = [res]));
  }
}
