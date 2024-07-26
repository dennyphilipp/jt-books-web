import { Component } from '@angular/core';
import { BookService } from './book.service';
import { AuthorService } from '../author/author.service';
import { SubjectService } from '../subject/subject.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from './book.model';
import { Author } from '../author/author.model';
import { Subject } from '../subject/subject.model';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: Book = new Book('', '', 0, '', 0, [], []);
  books: any[] = [];
  authors: Author[] = [];
  subjects: Subject[] = [];

  p: number = 1;

  constructor(private bookService: BookService,
    private toastr: ToastrService,
    private authorService: AuthorService,
    private subjectService: SubjectService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllAuthors();
    this.getAllSubjects();

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

  getAllAuthors(): void {
    this.authorService.getAll().subscribe(
      data => {
        this.authors = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os autores.");
      }
    );
  }

  getAllSubjects(): void {
    this.subjectService.getAll().subscribe(
      data => {
        this.subjects = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os assuntos.");
      }
    );
  }

  onEdit(id: number): void {
    this.bookService.getById(id).subscribe(
      response => {
        this.book = response;
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
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
        this.book = new Book('', '', 0, '', 0, [], []);
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
        this.book = new Book('', '', 0, '', 0, [], []);
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
