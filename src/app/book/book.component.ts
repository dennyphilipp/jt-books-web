import { Component } from '@angular/core';
import { BookService } from './book.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: Book = new Book('', '', 0, '', 0);
  books: any[] = [];
  p: number = 1;

  constructor(private bookService: BookService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.bookService.getAll().subscribe(
      data => {
        this.books = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os livros em tabela.");
      }
    );
  }

  onEdit(book: Book): void {
    this.book = new Book(book.title, book.publischer, book.version, book.year, book.id);
  }

  onDelete(id: number): void {
    this.bookService.delete(id).subscribe(
      response => {
        this.toastr.success('Livro removido com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  edit(book: Book): void {
    this.bookService.update(book).subscribe(
      response => {
        this.book = new Book('', '', 0, '', 0);
        this.toastr.success('Livro alterado com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  save(): void {
    this.bookService.create(this.book).subscribe(
      response => {
        this.book = new Book('', '', 0, '', 0);
        this.toastr.success('Livro cadastro com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  onSave(): void {
    if (this.book.id > 0)
      this.edit(this.book);
    else
      this.save();
  }
}
