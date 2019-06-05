import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { books } from '../books';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.book = books[+params.get('bookId')];
    });
  }

  addToCart(book) {
    window.alert('Your book has been added to the cart!');
    this.cartService.addToCart(book);
  }
}