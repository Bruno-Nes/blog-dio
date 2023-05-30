import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
    books?:Book[];

    teste = [1,2,3,4,5,6]
    
    constructor(private http: HttpClient) {

    }


  ngOnInit(): void {
    this.http.get<any[]>('../../db/data.json').subscribe(data => {
      this.books = data;
    });
  }

}
