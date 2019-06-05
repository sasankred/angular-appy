import { Component } from '@angular/core';
import { books } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books = books;

  share() {
    window.alert('The book has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the book goes on sale');
  }
}