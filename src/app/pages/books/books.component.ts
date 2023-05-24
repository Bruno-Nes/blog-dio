import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model';
import database from "../../db/data.json";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    books:Book[] = database.book;
    
    convertBooksToBook(){
      
    }

}
