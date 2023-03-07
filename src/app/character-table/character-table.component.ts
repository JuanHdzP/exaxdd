import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.css'],
})
export class CharacterTableComponent implements OnInit {
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((data) => {
        this.personajes = data.results;
      });
  }
}
